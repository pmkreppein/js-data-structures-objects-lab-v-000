const driver = {}
function updateDriverWithKeyAndValue(driver, k, v) {
    return Object.assign({}, driver, { [k]: v })
}
function destructivelyUpdateDriverWithKeyAndValue(driver, k, v) {
    driver[k] = v
    return driver
}
function deleteFromDriverByKey(driver, k) {
    let new_driver = {...driver}
    delete new_driver[k]
    return new_driver
}
function destructivelyDeleteFromDriverByKey(driver, k) {
    delete driver[k]
    return driver
}