# letsbuild-coding-test

## Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/en/) installed (preferably the latest LTS version).
- **npm/yarn**: A package manager (npm or yarn) to install dependencies.

## Setup Instructions

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone <https://github.com/iusmansultan/letsbuild-coding-test>
cd <letsbuild-coding-test>
```

### 2. Install dependencies


```bash
npm install
```

### 3. Environment Setup

- Create .env file in root directory
- Update the environment variables in .env file:


```bash
PORT=4000
```


### Running the Server

- Development mode (with nodemon):
 ```bash
 npm run dev
 ```


### Run Tests

 ```bash
 npm run test
 ```


### problem.txt file
``` bash
10 10 10 2000
10 10 10 900
4 4 8 10 10 1
5 5 5 61 7 1
5 5 6 61 4 1
1000 1000 1000 0 0 0 46501 0 2791 631 127 19 1
1 1 9 9 1
```

### output.txt file
``` bash
1000
-1
9
62
59
50070
9
```

### Example Walkthrough:

Given a box of size 10x10x10, and cubes of size 1, 2, 4 with respective amounts of 2, 3, 5, the function will:

1. Try to fill the box starting with the largest cubes (size 4), then move to size 2, and finally fill the smallest gaps with size 1 cubes.
2. It keeps track of how many cubes it uses and tries to avoid wasting space.
3. Once the box is fully packed or no cubes can fit, the function returns the total number of cubes used.