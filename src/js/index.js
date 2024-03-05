function clearDefaultValue(input) {
    if (input.value === input.defaultValue) {
        input.value = '';  // Clear default value only when the user starts typing
         
    }

}