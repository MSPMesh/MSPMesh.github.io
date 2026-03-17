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

TODO - make a guide on how to fork the repo, make a branch, and make a PR

[comment]: <> (A lot of this README was AI generated and of low quality, needs to be rewritten!)

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
3. Open the terminal in VSCode using `` Ctrl+Shift+` ``.
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