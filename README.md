# AgroSphere Project

AgroSphere is a sustainable agricultural development project that aims to monitor and manage farm data in India. This backend repository contains the server-side code for handling farm data using Node.js, Express, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Server](#running-the-server)
  - [API Endpoints](#api-endpoints)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) installed and running locally or on a remote server

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/AgroSphere-AgriTech-Project.git
   cd AgroSphere-AgriTech-Project
   ```
2. Install dependencies:

```bash
npm install
```

## Usage
### Running the Server
```bash
node server.js
```
The server will be running at http://localhost:5000.

### API Endpoints
- GET /api/farmData: Get all farm data entries.
- POST /api/farmData/add: Add a new farm data entry.
- GET /api/farmData/:id: Get a specific farm data entry by ID.
- POST /api/farmData/update/:id: Update a farm data entry by ID.
- DELETE /api/farmData/delete/:id: Delete a farm data entry by ID.

Example API request using cURL:
```bash
curl -X GET http://localhost:5000/api/farmData
```

## Features
- Basic CRUD operations for farm data.
- MongoDB integration for data storage.
- CORS support for cross-origin requests.
- Minimalistic structure for easy expansion.

## Contributing
If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
