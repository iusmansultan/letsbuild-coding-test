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

### Key Details:
This code is a solution to a problem where the goal is to determine the minimum number of cubes of varying sizes needed to fill a given 3D box. Here's a simple breakdown of the code's functionality:

### 1. getQuotientAndReminder function

- **Purpose:** This function calculates the quotient and remainder when dividing the dimension of the box by the dimension of a cube.
- **Example:** If a box has a dimension of 10 units and a cube has a size of 3 units, the quotient would be 3 (how many cubes fit) and the remainder would be 1 (how much space is left).

### 2. destroyBox function

- **Purpose:** This is a helper function that resets the box's dimensions to 0. This is useful when a box is completely filled or no more cubes can fit.

### 3. calculateMinCubes function

- **Purpose:** This is the core function. It calculates the minimum number of cubes needed to fill the box using cubes of various sizes.
- **Steps:**
    - **Input:** A box with dimensions (height, width, depth) and a list of cubes (size and quantity).
    - The function loops through the cubes and tries to fit them in the box.
    - It first checks if the box can fit a cube completely (without exceeding the box dimensions).
    - If there’s remaining space (remainder), the box is divided into smaller sections, and the process is recursively repeated for the new sections.
    - It keeps track of how many cubes are used (with `counter`).
    - **Recursive Approach:** The function calls itself multiple times to handle the remaining space in the box after placing cubes. The more cubes you place, the smaller the sections get, and the function checks all possible ways to fit the cubes in the remaining space.
- **Termination:** The process stops if no more cubes can fit or if all cubes have been used up.

### 4. validateInput function

- **Purpose:** It validates whether the input string for the box and cube sizes follows the correct format (three box dimensions and one or more cube sizes and amounts).

### 5. parseTask function

- **Purpose:** It takes a string (task) describing the box and cubes, splits it, and converts it into an object (`calculateMinProps`) that contains the box dimensions and the cubes (with their sizes and amounts).
- **Example:** A string input like `"10 10 10 2 3 5"` will be parsed into:
    - Box dimensions: `h = 10, w = 10, d = 10`
    - Cubes: `[{size: 1, amount: 2}, {size: 2, amount: 3}, {size: 4, amount: 5}]`

### How the Code Works

- **Main Flow:**
    - You provide a box size (height, width, depth) and a set of cubes with sizes and quantities.
    - The `calculateMinCubes` function attempts to fill the box with cubes, calculating how many cubes fit in the box's dimensions.
    - It handles different cube sizes by trying to fit them in all possible positions (height, width, depth).
    - If a cube doesn’t fit perfectly, the box is split, and the function recursively tries to fill the remaining spaces.
- **Key Idea:** The algorithm optimizes for the minimum number of cubes needed and handles any leftover space by recursively dividing the box.

### Example Walkthrough:

Given a box of size 10x10x10, and cubes of size 1, 2, 4 with respective amounts of 2, 3, 5, the function will:

1. Try to fill the box starting with the largest cubes (size 4), then move to size 2, and finally fill the smallest gaps with size 1 cubes.
2. It keeps track of how many cubes it uses and tries to avoid wasting space.
3. Once the box is fully packed or no cubes can fit, the function returns the total number of cubes used.