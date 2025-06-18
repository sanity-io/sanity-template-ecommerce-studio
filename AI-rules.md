# AI Rules for Sanity Development

This document contains opinionated best practices for AI-assisted Sanity Studio configuration and GROQ query writing. These rules are based on [Sanity's official AI best practices](https://www.sanity.io/docs/developer-guides/ai-best-practices).

## Content Modeling

### Schema Design Principles

- Model content based on what things are, not how they appear
- Use semantic field names that describe content purpose
- Avoid modeling presentation concerns in content types

### Schema Definition

- Always use `defineType`, `defineField`, and `defineArrayMember` helpers
- Write schema types in separate files for better organization
- Export named constants that match the filename
- Use the `name` attribute sparingly - prefer inferring from export names

### Field Configuration

- Use `radio` layout for option lists with fewer than 5 choices
- Always include `options.hotspot: true` for image fields
- Add meaningful descriptions and validation rules to fields
- Avoid boolean fields - use string options instead for better flexibility
- Prefer arrays of references over single references for scalability
- Order fields from most to least important for better editor experience

## GROQ Queries

### Query Structure

- Use SCREAMING_SNAKE_CASE for query variable names
- Write queries as separate variables for reusability
- Always use `defineQuery` helper for type safety
- Include all required attributes in projections
- Use parameters for dynamic values instead of string interpolation

### Query Examples

```typescript
const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && !(_id in path("drafts.**"))] {
    _id,
    title,
    slug,
    price,
    "image": image.asset->url
  }
`)
```

## TypeScript Integration

### Type Generation

- Extract schema after making changes
- Generate TypeScript types using Sanity TypeGen
- Create and maintain `sanity-typegen.json` configuration
- Import generated types in your code

### Type Safety

- Use generated types for all content queries
- Leverage TypeScript for better development experience
- Keep types in sync with schema changes

## Content Management

### Content Import

- Use `.ndjson` format for content imports
- Import content via Sanity CLI
- Avoid using `.` characters in document IDs
- Use placeholder images with document ID seeds for consistency

### Content Structure

- Structure content hierarchically when appropriate
- Use references to create relationships between content
- Consider content reusability across different contexts

## Shopify Integration Specific Rules

### Product Schema

- Model products as content-first with Shopify sync
- Use proxy fields for Shopify-managed data
- Separate content fields from commerce fields
- Implement proper inventory tracking patterns

### Asset Management

- Use Shopify Assets plugin for media management
- Implement proper image optimization
- Handle product variants correctly
- Maintain sync between Sanity and Shopify data

## Best Practices

### Studio Configuration

- Configure document actions for better workflows
- Use custom input components when needed
- Implement proper preview configurations
- Use structure builder for organized content navigation

### Performance

- Optimize GROQ queries for minimal data fetching
- Use projection to limit returned fields
- Implement proper caching strategies
- Consider query performance in complex content structures

### Maintenance

- Keep schema types organized and documented
- Regularly update dependencies
- Monitor schema changes and their impact
- Implement proper error handling

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity TypeGen](https://www.sanity.io/docs/sanity-typegen)
- [AI Best Practices](https://www.sanity.io/docs/developer-guides/ai-best-practices)
- [Official AI Rules Repository](https://github.com/sanity-io/ai-rules)

---

_This file should be referenced when using AI tools to generate or modify Sanity-related code to ensure consistency with best practices._
