from rest_framework import exceptions
from rest_framework.authentication import get_authorization_header, BaseAuthentication
from django.contrib.auth.models import User

import jwt
from decouple import config

SECRET_KEY = config('SECRET_KEY', cast=str)


class TokenAuthentication(BaseAuthentication):

    model = None

    def get_model(self):
        return User

    def authenticate(self, request):
        auth = get_authorization_header(request).split()
        if not auth or auth[0].lower() != b'token':
            return None

        if len(auth) == 1:
            msg = 'Invalid token header. No credentials provided.'
            raise exceptions.AuthenticationFailed(msg)
        elif len(auth) > 2:
            msg = 'Invalid token header'
            raise exceptions.AuthenticationFailed(msg)

        try:
            token = auth[1]
            if token == "null":
                msg = 'Null token not allowed'
                raise exceptions.AuthenticationFailed(msg)
        except UnicodeError:
            msg = 'Invalid token header. Token string should not contain invalid characters.'
            raise exceptions.AuthenticationFailed(msg)

        return self.authenticate_credentials(token)

    def authenticate_credentials(self, token):
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            email = payload['email']
            userid = payload['id']

            user = User.objects.get(
                email=email,
                id=userid,
                is_active=True
            )
        except:  # noqa: E722
            raise exceptions.AuthenticationFailed("Invalid token")

        return (user, token)

    def authenticate_header(self, request):
        return 'Token'
