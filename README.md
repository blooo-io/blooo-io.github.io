![EBSI Logo](https://ec.europa.eu/cefdigital/wiki/images/logo/default-space-logo.svg)

# Wallet Web Client

> GUI for the EBSI Wallet

This repository contains the code of a wallet web client application.
It has been developed using Create-React-App.

## Table of Contents

1. [Getting started](#Getting-started)
2. [Running](#Running)
3. [Testing](#Testing)
4. [Licensing](#Licensing)

## Getting started

### Requirements

- Node.js >= 12
- Yarn >= 1.22.0

### Instructions

Clone the repository and move to the project directory

```sh
git clone https://ec.europa.eu/cefdigital/code/scm/ebsi/wallet-web-client.git
cd wallet-web-client
```

Install the required libraries and packages dependencies

```sh
yarn install
```

## Running

### Run with Docker Compose

Move to the base directory

```sh
cd wallet-web-client
```

Build and Run ebsi-wallet Docker Image

```sh
docker-compose up --build
```

Or to run it on the background, just add -d option:

```sh
docker-compose up -d --build
```

And open <http://localhost:8080/wallet> to see the results.

If you need to stop the containers:

```sh
docker-compose down
```

Note that some of the required variables (ARGs and ENVs) are explicitly set in `docker-compose.yml`, however you have to set REACT_APP_EBSI_ENV.

You can find the list of customizable ARGs and ENVs in `Dockerfile`.

### Without Docker Compose

Run the app from the base directory:

Firstly, create a copy of `.env.example` and name it `.env` in this directory; change the variables if needed.

When working locally, either use `REACT_APP_EBSI_ENV=local` if you run the APIs locally in parallel, or `REACT_APP_EBSI_ENV=integration` to use the online APIs.

Make sure that `REACT_APP_WALLET` points to the URL of the local server.

If you have trouble with ECAS, you may also want to point to the acceptance version of the service: `REACT_APP_EULOGIN=https://ecas.acceptance.ec.europa.eu/cas`.

Now that your environment is configured, run:

```sh
yarn install

yarn build

yarn start
```

This command starts the web app at '<http://localhost:8080/wallet/>' where you can play with the EBSI Wallet.

## Testing

Run the tests

```sh
yarn test
```

### ESLint

```sh
yarn lint
```

### stylelint

```sh
yarn lint:css
```

or with yarn:

```sh
yarn stylelint "**/*.css"
```

### Prettier

```sh
yarn lint:prettier
```

or with yarn:

```sh
yarn prettier . --check
```

### Auditing the dependencies

```sh
yarn run audit
```

## Licensing

Copyright (c) 2019 European Commission
Licensed under the EUPL, Version 1.2 or - as soon they will be approved by the European Commission - subsequent versions of the EUPL (the "Licence");
You may not use this work except in compliance with the Licence.
You may obtain a copy of the Licence at:

- <https://joinup.ec.europa.eu/page/eupl-text-11-12>

Unless required by applicable law or agreed to in writing, software distributed under the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the Licence for the specific language governing permissions and limitations under the Licence.
