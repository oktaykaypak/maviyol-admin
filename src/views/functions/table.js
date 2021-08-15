class tableService {

    static listLength(list) {
        try {
            const listLen = list.length
            return listLen;
        } catch (err) {
            console.log("listLength Error!");
        }
    }

    static firstTimeTable(tableTotalData, list) {
        try {
            let viewList = []
            for (let i = 0; i < tableTotalData; i++) {
                if (list[i] != undefined) {
                    viewList.push(list[i]);
                }
            }
            return viewList;
        } catch (err) {
            console.log("firstTimeTable Error!");

        }
    }

    static handleCurrentChange(val, tableTotalData, list) {
        try {
            let viewList = [];
            const index = val * tableTotalData - tableTotalData;
            for (let i = 0; i < tableTotalData; i++) {
                if (list[index + i] != undefined) {
                    viewList.push(list[index + i]);
                }
            }
            return viewList;
        } catch (err) {
            console.log("handleCurrentChange Error!");
        }
    }

}
export default tableService;