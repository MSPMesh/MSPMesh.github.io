# MSPMesh Documentation Wiki
Welcome to the MSPMesh Documentation Wiki!  
You can access the live site here: [https://mspmesh.github.io/](https://mspmesh.github.io/)

---

## Environment Setup  
We recommend using **Visual Studio Code (VSCode)** to contribute to this wiki.  
VSCode offers helpful features like Git integration, spell checking, syntax highlighting, and AI assistance.

---

## Contribution Standards  
All changes and additions to this site should be submitted as a **GitHub Pull Request**.  
*Note: Contribution standards are still being finalized. Stay tuned for updates!*

---

## Making a Basic Change and Submitting a Pull Request  

Follow these steps to make a simple change to one of the markdown files and submit it for review using **Visual Studio Code**:

1. **Clone the Repository**  
   - Open **Visual Studio Code**.  
   - Go to the **Source Control** tab (or press `Ctrl+Shift+G`).  
   - Click **Clone Repository** and paste the repository URL:  
     ```
     https://github.com/MSPMesh/MSPMesh.github.io.git
     ```
   - Choose a folder on your computer where the repository will be cloned.  

2. **Create a New Branch**  
   - In the **Source Control** tab, click the branch dropdown in the status bar (bottom-left corner of VSCode).  
   - Select **Create New Branch** and enter a descriptive name for your branch (e.g., `fix-typo-readme`).  

3. **Edit a Markdown File**  
   - Open the project folder in **VSCode** (if not already open).  
   - Locate the markdown file you want to edit (e.g., `README.md` or a file in the `tutorials` folder).  
   - Make your changes using VSCode's editor. For example, you can fix typos, update content, or add new sections.  

4. **Commit Your Changes**  
   - Save your changes.  
   - Go to the **Source Control** tab.  
   - You will see your changes listed under **Changes**.  
   - Add a commit message in the text box (e.g., "Fix typo in README") and click the checkmark icon to commit your changes.  

5. **Push Your Changes**  
   - After committing, click the **Sync Changes** button in the status bar (or use the **Source Control** tab).  
   - VSCode will prompt you to publish your branch. Click **Publish Branch**.  

6. **Create a Pull Request**  
   - Once your branch is pushed, go to the [MSPMesh GitHub repository](https://github.com/MSPMesh/MSPMesh.github.io).  
   - GitHub will detect your new branch and suggest creating a pull request. Click **Compare & pull request**.  
   - Add a clear title and description for your pull request, explaining what changes you made and why.  
   - Submit the pull request.  

---

## Previewing Pages Locally  
Want to see how your changes look before submitting a pull request?  
Follow these steps to set up and preview the site locally.

### Step 1: Install Ruby  
Ruby is required to build and run the site locally. Follow the instructions below based on your operating system:

#### macOS:
```bash
brew install ruby
```

#### Ubuntu/Debian:
```bash
sudo apt install ruby-full build-essential zlib1g-dev
```

#### Windows:
1. Download and install [RubyInstaller](https://rubyinstaller.org/).  
2. During installation, check the box for **"Add Ruby to PATH"**.

---

### Step 2: Set Up the Jekyll Site Locally  
1. Clone the repository to your computer.  
2. Open the project folder in **VSCode**.  
3. Open the terminal in VSCode using `Ctrl+```.  
4. Run the following commands in the terminal:

```bash
# Install Bundler and Jekyll
gem install bundler jekyll

# Install project dependencies
bundle install
```

---

### Step 3: Run the Jekyll Development Server  
1. In the same terminal, start the Jekyll server by running:

```bash
bundle exec jekyll serve
```

2. Open your browser and go to [http://localhost:4000](http://localhost:4000) to view the site.

---

Feel free to reach out if you encounter any issues or need help setting up your environment. Happy contributing!