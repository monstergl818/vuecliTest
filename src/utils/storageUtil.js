/*
数据存储工具模块
向外暴露对象还是暴露函数？ 需分析有什么功能
*/
const TODOS_key = 'todos_key'
export default{
  //读取保存
  readTodos(){
    return JSON.parse(window.localStorage.getItem('todos_key') || '[]')
  },
  //保存
  saveTodos(todos){
    window.localStorage.setItem('todos_key',JSON.stringify(todos))
  }
}
