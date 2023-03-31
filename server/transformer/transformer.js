class Transformer {
    userTransformer(data) {
        const { password, ...transformedData } = data;
        return transformedData
    }
}

export default new Transformer;