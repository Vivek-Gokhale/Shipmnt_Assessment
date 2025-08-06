const generateUniqueName = (originalName) => {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
    return `${timestamp}_${originalName}`;
};

module.exports = generateUniqueName;
