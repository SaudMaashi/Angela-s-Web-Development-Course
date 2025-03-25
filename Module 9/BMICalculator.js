function calculateBMI(weight, height) {
    if (weight <= 0 || height < 0) {
        return "Weight and height nust be positive values.";
    }

    return weight / (height * height);
}