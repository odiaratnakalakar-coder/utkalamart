export default {
  async fetch(request) {
    const url = new URL(request.url);

    const id = url.searchParams.get("id");
    const source = url.searchParams.get("source") || "products";

    if (!id) {
      return new Response("Product ID missing", {
        status: 400,
        headers: {
          "content-type": "text/plain; charset=UTF-8"
        }
      });
    }

    const productUrl =
      "https://odiaratnakalakar-coder.github.io/utkalamart/product.html" +
      "?id=" + encodeURIComponent(id) +
      "&source=" + encodeURIComponent(source);

    const imageUrl =
      "https://odiaratnakalakar-coder.github.io/utkalamart/logo.png";

    const html = `<!DOCTYPE html>
<html lang="or">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<title>Utkala Mart | ଓଡ଼ିଆ ପ୍ରଡକ୍ଟ</title>

<meta property="og:type" content="product">
<meta property="og:site_name" content="Utkala Mart">
<meta property="og:title" content="Utkala Mart | ଓଡ଼ିଆ ପ୍ରଡକ୍ଟ">
<meta property="og:description" content="📦 ଓଡ଼ିଆ ପ୍ରଡକ୍ଟ | 🛒 Utkala Mart">
<meta property="og:image" content="${imageUrl}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${productUrl}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Utkala Mart | ଓଡ଼ିଆ ପ୍ରଡକ୍ଟ">
<meta name="twitter:description" content="📦 ଓଡ଼ିଆ ପ୍ରଡକ୍ଟ | 🛒 Utkala Mart">
<meta name="twitter:image" content="${imageUrl}">

</head>

<body>

<script>
window.location.replace(${JSON.stringify(productUrl)});
</script>

<p>Utkala Mart Product</p>

</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=60"
      }
    });
  }
};
