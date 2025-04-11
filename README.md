# Therapia

Therapia is a mobile, desktop, tablet therapy webapp designed to provide accessible, convenient, and personalized mental health support. Our mission is to bridge the gap between individuals and mental health professionals, fostering a supportive community that promotes emotional well-being.

## to generate folder structure to look at

```bash
- tree /F /A > structure.txt
```

## to create new app inside the app folder

- cd server/apps
- django-admin startapp < your-app-name >
- <strong> modify the apps.py file in the < your-app-name > folder <strong>
- eg: inside apps.py add "apps.< your-app-name >" to the newly installed

```bash
class your-app-nameConfig(AppConfig):
  default_auto_field = 'django.db.models.BigAutoField'
  name = "apps.your-app-name "
```

- navigate to server, then settings.py and add to installed apps

```bash
- eg: INSTALLED_APPS = [
  "apps.your-app-name"
  ]
```
