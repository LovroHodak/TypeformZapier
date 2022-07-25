TYPEFORM.com
create typeform - start from scratch
publish - copy - inline
get the code - data-tf-widget="DZ4cpBuy" - DZ4cpBuy
npm i @typeform/embed-react
import { Widget } from "@typeform/embed-react";
<Widget id="DZ4cpBuy" />
done

ZAPIER
-connect this app (typeform), with this app (gmail)
try it
1 step (app, acount, triger).... do required steps
publish
done

NETLIFY CMS
public - admin : index.html, config.yml
//index.html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
</head>
<body>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
//config.yml
backend:
  name: github
  repo: LovroHodak/TypeformZapierNetlifyCMS
  branch: main
  #change the name of repo to yours

media_folder: "public/images"
public_folder: "images"

publish_mode: editorial_workflow  

collections:
  - name: "blog" # Used in routes, e.g., /admin/collections/blog
    label: "Blog" # Used in the UI
    folder: "_posts/blog" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "thumbnail", widget: "image"}
      - {label: "Rating (scale of 1-5)", name: "rating", widget: "number"}
      - {label: "Body", name: "body", widget: "markdown"}


// after you make changes in /admin/ you have to do -git pull - to update local project
  




