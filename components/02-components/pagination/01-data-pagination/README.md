Collections of data are split into multiple pages because the size of the data would take too long to render all at once and because very long collections are more than a user can scan or comprehend.

Data pagination controls allow users to determine how many items are compared on one page, and to navigate forward and backward one page at a time in the results list.

## When to use
- On data and legal tables when the exact number of items or pages returned would be so large that loading the count would make the page less performant

## When to consider something else
- When the number of items is easily counted without impacting performance, such as in a feed of posts, use [feed pagination](/components/detail/feed-pagination)
