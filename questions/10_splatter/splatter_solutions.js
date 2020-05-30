const splatter = (...args) => {
    return args.reduce((acc, item) => {
        Object.entries(item).forEach(([key,value])=>{
            acc+=value;
        });
        return acc;
    }, 0);
}