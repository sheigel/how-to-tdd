export default function createStack() {
    var isEmpty = true
    return {
        isEmpty(){
            return isEmpty
        },
        getSize(){
            if (isEmpty) {
                return 0
            }
            else {
                return 1
            }
        },
        push(param){
            isEmpty = false
        }
    }
}