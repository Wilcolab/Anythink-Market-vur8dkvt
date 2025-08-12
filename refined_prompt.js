/**
 * Converts a given string to camelCase format.
 *
 * The function accepts strings containing letters, numbers, spaces, hyphens (-), and underscores (_).
 * It trims the input, validates allowed characters, and splits the string into words by spaces, hyphens, or underscores.
 * The first word is lowercased, and subsequent words are capitalized and concatenated.
 *
 * Edge cases handled:
 * - Non-string input returns an error message.
 * - Empty string returns an error message.
 * - Input with invalid characters returns an error message.
 * - Input containing only numbers returns an error message.
 * - Input resulting in no valid words returns an error message.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string, or an error message if input is invalid.
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function accepts strings containing letters, numbers, spaces, hyphens (-), and underscores (_).
 * It trims the input, validates allowed characters, and splits the string into words by spaces, hyphens, or underscores.
 * All words are lowercased and joined with dots ('.').
 *
 * Edge cases handled:
 * - Non-string input returns an error message.
 * - Empty string returns an error message.
 * - Input with invalid characters returns an error message.
 * - Input containing only numbers returns an error message.
 * - Input resulting in no valid words returns an error message.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string, or an error message if input is invalid.
 */
function toCamelCase(input) {
    // Check for non-string input
    if (typeof input !== 'string') {
        return 'Error: Input must be a string.';
    }

    // Trim input and check for empty string
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return 'Error: Input string is empty.';
    }

    // Check for invalid characters (only allow letters, numbers, spaces, -, _)
    if (!/^[a-zA-Z0-9 _-]+$/.test(trimmed)) {
        return 'Error: Input contains invalid characters. Only letters, numbers, spaces, "-", and "_" are allowed.';
    }

    // Split by word separators
    const words = trimmed.split(/[\s_-]+/);

    // Edge case: all numbers
    if (words.every(word => /^\d+$/.test(word))) {
        return 'Error: Input cannot be only numbers.';
    }

    // Build camelCase string
    const camelCase = words
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');

    // Edge case: result is empty after processing
    if (camelCase.length === 0) {
        return 'Error: Input does not contain any valid words.';
    }

    return camelCase;
}

// Example usage:
// console.log(toCamelCase("abra-kadabra")); // abraKadabra
// console.log(toCamelCase(123123)); // Error: Input must be a string.
// console.log(toCamelCase("112312#@@#")); // Error: Input contains invalid characters. Only letters, numbers, spaces, "-", and "_" are allowed.
// console.log(toCamelCase("abra kadabra_123")); // abraKadabra123

function toDotCase(input) {
    // Check for non-string input
    if (typeof input !== 'string') {
        return 'Error: Input must be a string.';
    }

    // Trim input and check for empty string
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return 'Error: Input string is empty.';
    }

    // Check for invalid characters (only allow letters, numbers, spaces, -, _)
    if (!/^[a-zA-Z0-9 _-]+$/.test(trimmed)) {
        return 'Error: Input contains invalid characters. Only letters, numbers, spaces, "-", and "_" are allowed.';
    }

    // Split by word separators
    const words = trimmed.split(/[\s_-]+/);

    // Edge case: all numbers
    if (words.every(word => /^\d+$/.test(word))) {
        return 'Error: Input cannot be only numbers.';
    }

    // Build dot.case string
    const dotCase = words
        .map(word => word.toLowerCase())
        .join('.');

    // Edge case: result is empty after processing
    if (dotCase.length === 0) {
        return 'Error: Input does not contain any valid words.';
    }

    return dotCase;
}

// Example usage:
// console.log(toDotCase("abra kadabra_123")); // abra.kadabra.123
