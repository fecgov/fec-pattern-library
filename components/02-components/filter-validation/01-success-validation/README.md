Validation messages are displayed **after** a user has interacted with a particular field. Success validations help users feel confident that their changes to filters or fields have been applied.

## When to use
- When a user's intended action has affirmatively been applied (even if that action is _removing_ a filter, validations confirm that the filter was successfully removed)
- When a user's entry to a field has been accepted by the system, such as meeting password requirements

## When to consider something else
- Validation styles should not be used to describe the limitations or behavior of the filter. If a filter needs more context, consider using a persistent message outside of the field, or a tooltip.  

### GitHub issues
- [#416: Create a new pattern for form validation-style alerts](https://github.com/18F/fec-style/issues/416)
