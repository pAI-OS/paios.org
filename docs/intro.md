---
sidebar_position: 1
---

# Getting Started

Clone the canary branch of the repository (which includes the pre-built frontend):

`git clone --branch canary --single-branch https://github.com/pAI-OS/paios.git`

Setup the environment on the first run only:

`python3 paios/scripts/setup_environment.py`
(`python .\paios\scripts\setup_environment.py` on Windows)

Activate the new environment:

`source paios/.venv/bin/activate`
(`.\paios\.venv\Scripts\Activate.ps1` on Windows)

Start the pAI-OS server:

`python3 -m paios`
(`python -m paios` on Windows)

Visit [http://localhost:3080/](http://localhost:3080/)

## Developers

Clone the full repository:

`git clone https://github.com/pAI-OS/paios.git`

Build the frontend:

`cd frontend`
`npm run build`
`cd ..`
