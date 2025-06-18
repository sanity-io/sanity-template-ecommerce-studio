# A Shopify Ecommerce Studio with a Native Authoring Experience

This is a powerful ecommerce content management system built with [Sanity Studio](https://www.sanity.io/studio) and integrated with Shopify for seamless product and content management.

## Features

- **Sanity Studio** for content management
- **Shopify Integration** for product and inventory management
- **TypeScript** for type safety
- **Product Management** with variants and collections
- **Inventory Tracking** with stock levels
- **Content Modeling** for flexible ecommerce content

## Demo

This template comes pre-configured with:

- Product schema types optimized for Shopify
- Collection management interfaces
- Inventory tracking components
- Custom document actions for Shopify sync
- Asset plugin for managing Shopify media

## Getting started

### Initialize template

```shell
npm create sanity@latest -- --template sanity-io/sanity-template-ecommerce-studio
```

### Run locally

```shell
npm run dev
```

Your Sanity Studio should now be running on [http://localhost:3333](http://localhost:3333).

## Choose your setup path

### Option 1: Quick start with sample data (recommended for exploration)

To get started quickly and explore the studio's capabilities, import the included sample data:

```shell
cd studio
npx sanity dataset import sample-data.ndjson
```

This will populate your dataset with example products, collections, and content. Perfect for:

- Exploring the studio interface and features
- Understanding the content structure
- Testing workflows before connecting to Shopify
- Demos and development

**Note**: Sample data is static and won't sync with a live Shopify store.

### Option 2: Connect to your Shopify store (for production use)

To connect this studio to your live Shopify store for real-time product sync:

1. Install [Sanity Connect](https://apps.shopify.com/sanity-connect) to your Shopify store
2. [Enable sync to your Shopify store](https://www.sanity.io/docs/sanity-connect-for-shopify)
3. Update `SHOPIFY_STORE_ID` in `studio/constants.ts` to reflect your Shopify domain

This setup enables:

- Real-time product and inventory sync
- Bi-directional updates between Sanity and Shopify
- Live product data in your content workflows
- Production-ready ecommerce content management

## Deployment

### Deploy to Sanity

```shell
npx sanity deploy
```

Your studio will be available at `https://yourprojectname.sanity.studio`.

## Next steps

- [Follow the Shopify integration guide](https://www.sanity.io/docs/sanity-connect-for-shopify)
- [Learn how to display content in Liquid](https://www.sanity.io/docs/displaying-sanity-content-in-liquid)
- [Invite collaborators to your studio](https://www.sanity.io/docs/access-control)

## Resources

- [Read "Getting started with Sanity"](https://www.sanity.io/docs/getting-started?utm_source=github.com&utm_medium=referral&utm_campaign=template)
- [Check out the docs for Sanity Studio](https://www.sanity.io/docs/sanity-studio?utm_source=github.com&utm_medium=referral&utm_campaign=template)
- [Join the community Slack](https://slack.sanity.io/?utm_source=github.com&utm_medium=referral&utm_campaign=template)
- [Explore Sanity Learn](https://www.sanity.io/learn?utm_source=github.com&utm_medium=referral&utm_campaign=template)
