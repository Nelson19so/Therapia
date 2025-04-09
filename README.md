# Therapia

Therapia is a mobile, desktop, tablet therapy webapp designed to provide accessible, convenient, and personalized mental health support. Our mission is to bridge the gap between individuals and mental health professionals, fostering a supportive community that promotes emotional well-being.

## to generate folder structure to look at

- tree /F /A > structure.txt

## to create new app inside the app folder

- cd server/apps
- django-admin startapp < your-app-name >
- <strong> modify the apps.py file in the < your-app-name > folder <strong>
- eg: inside apps.py add "apps.< your-app-name >" to the newly installed

<apps.py>

<apps.py class>class < your-app-name >Config(AppConfig):<apps.py class>
<apps.py conf>default_auto_field = 'django.db.models.BigAutoField'<apps.py conf>
<apps.py name>name = "'apps'.< your-app-name >"<apps.py name>

<apps.py>

- navigate to server, then settings.pyand add to installed apps
- eg: <installed apps>"INSTALLED_APPS = [
  "apps.< your-app-name >"
  ]"
  <installed apps>

## User models created 
- made the defualt login to use email instead of the defualt from django which uses username
- made phone number to be required: This is usefull when we decide to use otp so that we can force the user to include their user name at point of signup
- added the option for user to choose to select to accept terms and condition which would be made required by the frontend team