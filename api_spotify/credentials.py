import base64

SPOTIFY_APP_ID = '93d39b100f2b4543a82428d2dbb5d3ad'
SPOTIFY_APP_SECRET = 'aa73fa78ac944f5ba48b3e2012b85589'

_credentials = f"{SPOTIFY_APP_ID}:{SPOTIFY_APP_SECRET}"

CREDENTIALS_ENCODED = base64.b64encode(_credentials.encode()).decode()