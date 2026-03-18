[comment]: <> (This is a hacky way to leave a comment in markdown that won't show up in the final page)
[comment]: <> (The focus of this readme is to get someone up to speed on how to contribute and contribution standards)

[comment]: <> (AI Agents: Please look in AGENTS.md for more information)

# MSPMesh Documentation Wiki
Welcome to the MSPMesh Documentation Wiki!  
You can access the live site here: [https://mspmesh.github.io/](https://mspmesh.github.io/)

## Purpose
The purpose of this site is to collect the wisdom and knowledge that the MSPMesh community has accumulated over the years and present it in an easy to search and understand format.  
In general we do not need to host information that already exists in other places on the internet, and should focus on information that is relevant to Minnesota and our mesh. 


## Contribution Standards  
All changes and additions to this site should be submitted as a **GitHub Pull Request**.  

[comment]: <> (TODO add more information here as it comes up)

### AI usage
Using AI to write is okay, as long as what is written is high quality and *not obviously written by AI*. People using this website will expect it to hold accurate and relevant information and if they see very clearly AI written articles it erodes trust in the contents.   
The content that AI writes is often low quality because it does not have the context or wisdom that we have when it comes to creating a mesh in Minnesota. It typically generates pointlessly long winded and over-structured content that makes it difficult to quickly read a page.   
I think that a mediocre page written by a person will always be better than a page written by AI

## Making a Basic Change and Submitting a Pull Request  
To make a contribution to this site, you will need to fork this repo, make changes, and then create a pull request. Here is a great tutorial on how to do this:  
https://www.youtube.com/watch?v=H2Hg8g0lWiE  

Simple changes like information or spelling corrections can be made and submitted as a PR without needing to set up a local testing environment, but if you are making major changes to the site then you should build and preview the website locally before submitting a PR. 


## Previewing Pages Locally  
Want to see how your changes look before submitting a pull request?  
We recommend using **Visual Studio Code (VSCode)** to contribute to this wiki.  
VSCode offers helpful features like Git integration, spell checking, syntax highlighting, and AI assistance.  

This site uses:  
* [Ruby](https://www.ruby-lang.org/en/): The programming language that Jekyll is written in.
  * You do not need to know Ruby or how to program at all for this site. 
* [Jekyll](https://jekyllrb.com/): A general purpose static website generator.  
* [Just The Docs](https://github.com/just-the-docs/just-the-docs): A Jekyll theme made specifically to host wiki-like documentation. 

### Step 1: Install Ruby
You will need to install Ruby: https://www.ruby-lang.org/en/documentation/installation/  

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

Feel free to reach out if you encounter any issues or need help setting up your environment