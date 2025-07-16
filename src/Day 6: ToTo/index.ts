type Status = 'deleted'|'done'|'available'
type taskType= {
  id:number,
  task:string,
  status:Status
}
let tasks:taskType[]=[]
function showTasks(){
  console.table(tasks)
  
}
function addTask(task:string):void{
  tasks.push({
    id:tasks.length+1,
    status:"available",
    task:task
  })
}
function removeTask(id:number):taskType[]{
  const arr:taskType[]=tasks.filter((item:taskType)=>item.id!==id)
  const isExist:boolean= tasks.some((item)=>item.id===id)
  !isExist && console.log(`item can not be removed, because ${id} dose not in any item.`);
  return arr
}
const updateStatus = (id: number, status: Status) => {
  const task = tasks?.find(item => item?.id === id);
  if (task) {
    task.status=status
  }
}
addTask("Do something")
addTask("Done My works")
updateStatus(2,"done")
// tasks=removeTask(1)
showTasks()
