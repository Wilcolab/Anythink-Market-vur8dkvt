function toKebabCase(str) {
    return str
        // Insert hyphens before uppercase letters (for camelCase/PascalCase)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Replace spaces and underscores with hyphens
        .replace(/[\s_]+/g, '-')
        // Convert to lowercase
        .toLowerCase();
}