# User Authentication API Documentation

**Base URL**: `https://therapia-ln4x.onrender.com/api/`

---

## Authentication Overview

This API supports:

- User Registration
- User Login
- User Logout
- Profile management
- Password Reset via OTP (One Time Password)

Tokens are returned via **JWT (access & refresh)** and must be sent in the `Authorization` header as `Bearer <token>` for authenticated routes.

---

## Endpoints

### 1. **Register User**

**POST** `/accounts/signup/`

**Description**: Registers a new user and returns tokens.

**Request Body**:

```json
{
  "email": "user@example.com",
  "phone_number": "08011112222",
  "first_name": "John",
  "last_name": "Doe",
  "password": "Password123!",
  "confirm_password": "Password123!",
  "terms_accepted": true
}
```

**Success Response**:

```json
{
  "success": true,
  "user": {
    "email": "user@example.com",
    "first_name": "John"
  },
  "tokens": {
    "access": "...",
    "refresh": "..."
  }
}
```

**Error Response**:

```json
{
  "success": false,
  "error": {
    "email": "Email already registered",
    "password": "Passwords do not match",
    ...
  }
}
```

---

### 2. **Login User**

**POST** `/accounts/login/`

**Request Body**:

```json
{
  "email": "user@example.com",
  "password": "Password123!"
}
```

**Success Response**:

```json
{
  "success": true,
  "user": {
    "email": "user@example.com"
  },
  "token": {
    "access": "...",
    "refresh": "..."
  }
}
```

**Error Response**:

```json
{
  "success": false,
  "errors": {
    "non_field_errors": ["Invalid credentials"]
  }
}
```

---

### 3. **Logout**

**POST** `/accounts/logout/`

**Headers**:

```
Authorization: Bearer <access_token>
```

**Success Response**:

```json
{
  "message": "Logout successful!"
}
```

---

### 4. **Get/Update User Profile**

**GET / PUT** `/accounts/profile/<id>/`

**Headers**:

```
Authorization: Bearer <access_token>
```

**Request Body (for update)**:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "08123456789"
}
```

**Success Response (GET)**:

```json
{
  "email": "user@example.com",
  "first_name": "John",
  "last_name": "Doe",
  "phone_number": "08123456789",
  "terms_accepted": true
}
```

---

### 5. **Delete User Account**

**DELETE** `/accounts/delete/`

**Headers**:

```
Authorization: Bearer <access_token>
```

**Success Response**:

```json
204 No Content
```

---

### 6. **Request OTP for Password Reset**

**POST** `/accounts/request-otp/`

**Request Body**:

```json
{
  "email": "user@example.com"
}
```

**Success Response**:

```json
{
  "success": true,
  "user": {
    "email": "user@example.com",
    "otp": "****" // (Optional: if showing in UI, but usually emailed)
  }
}
```

**Error Response**:

```json
{
  "success": false,
  "error": {
    "email": ["User with this email does not exist."]
  }
}
```

---

## Tokens

- You get `access` and `refresh` tokens on registration or login.
- **Send the `access` token** in the headers to access protected routes:

```http
Authorization: Bearer <access_token>
```

## Example Frontend Flow (React)

1. **Register/Login**: store both tokens in `localStorage`

```js
localStorage.setItem("access", data.tokens.access);
localStorage.setItem("refresh", data.tokens.refresh);
```

2. **Make authenticated requests**:

```js
axios.get("/api/accounts/profile/", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  },
});
```

3. **Handle token expiration**: If 401, call `/token/refresh/` with the `refresh` token.

---

## Notes:

- Always **store tokens securely** (use `localStorage` for now, but cookies are safer long-term).
- **Use the `access` token** for any protected request (profile, logout, etc).
- If token is expired, catch 401 errors and automatically try refresh.
- OTP is sent to email for password reset. The actual password reset logic can be extended.
