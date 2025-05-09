---
title: Contribute to this wiki
parent: Tutorials
---

## What is this website  
This website is hosted on [Github](https://github.com/) and uses [Github Pages](https://pages.github.com/) to build and deploy. To contribute to this site, you will need a firm understanding of how to use [git](https://git-scm.com/) and write [markdown](https://www.markdownguide.org/basic-syntax/). 

## Environment setup  
We highly suggest using VSCode to contribute to the wiki because it handles git, spell checking, syntax highlighting, llm assistant, and more. 

## Standards
All changes and additions to this site should start as a github pull request.  
TODO add more standards

## Local Page Rendering
If you would like to see what your page looks like before making a pull request, you can build it locally!    

### 1. Install Ruby (if not already installed)
#### On macOS:

```bash
brew install ruby
```

#### On Ubuntu/Debian:

```bash
sudo apt install ruby-full build-essential zlib1g-dev
```

#### On Windows:

Install [RubyInstaller](https://rubyinstaller.org/) and check "Add Ruby to PATH" during install.

### 2. Set Up Your Jekyll Site Locally   
Clone the repo, and open the folder with VSCode. Open the terminal with `Ctrl+\``, and enter these commands:

```bash
# Install Bundler and Jekyll
gem install bundler jekyll

# Install dependencies
bundle install
```

### 3. Run the Jekyll Development Server

In the same terminal, run this command to start the Jekyll server:

```bash
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000) in your browser.
