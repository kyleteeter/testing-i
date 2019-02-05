module.exports = {
    success: (item) => {
        let level = 0;
        if (item.enhancement < 14) {
            level === item.enhancement + 1;}
        if (item.enhancement === 15) {
             level === 'PRI'}

        let successItem = {
            name: item.name,
            type: item.type,
            durability: item.durability,
            enhancement: level
        }
        return successItem;
    },

    fail: {

    },

    repair: (item) => {

        let updateItem = {
            name: item.name,
            type: item.type,
            durability: 100,
            enhancement: item.enhancement
        }

        return updateItem;
    }
}