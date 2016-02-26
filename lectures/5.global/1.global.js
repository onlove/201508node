/**
 * 全局对象
 * global 全局变量的宿主
 */
name='zfpx';
console.log(global.name);

console.log(global==global.global);
//console.log(global);

/*
* 伪全局
* __filename 当前模块的绝对路径
* */
console.log(global.__filename)
console.log(__filename);
console.log(__dirname);

/*
* precess 进程
*   argv
*   env.Path
*   pid
*   chdir [Function:chdir]
*   cwd   [Function:cwd]
*   memoryUsage:[Function:memoryUsage]
*   stdout:[Getter]
*   stderr:[Getter]
*   stdin: [Getter]
*   exit:[Function]
*   kill:[Function]
*
*/
console.log(process.argv);
console.log(process.env.Path);
console.log(process.pid);