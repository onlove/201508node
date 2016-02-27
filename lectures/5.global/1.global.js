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

/*
console.log(global.__filename)
console.log(__filename);
console.log(__dirname);
*/
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

/*
console.log(process.argv);
console.log(process.env.Path);
console.log(process.pid);
*/

/*
process.stdin.on('data',function(data){
    process.stdout.write('read',data)
});*/

/*
console.log(process.cwd());
process.chdir('..');
console.log(process.cwd());*/

console.log(process.memoryUsage())
/*
* rss: 17473536,         常驻内存
* heapTotal: 9275392,    堆的问题
* heapUsed: 4050464      堆的使用量
* */