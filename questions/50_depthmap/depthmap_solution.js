const recordDepth = (site) => {
    if(typeof site != 'object') {
        throw new Error('req obj')
    }

    const depthMeter = (site, depthLevel = 0 ) => {
        for (let ele in site) {
            site.depth = depthLevel
            if(typeof site[ele] === 'object') {
                depthLevel++
                depthMeter(site[ele], depthLevel)
                depthLevel--
            }
        }
        return site
    }
    return depthMeter(site);
}