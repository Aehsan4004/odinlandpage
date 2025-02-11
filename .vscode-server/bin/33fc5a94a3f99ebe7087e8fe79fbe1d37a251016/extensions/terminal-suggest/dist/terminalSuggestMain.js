(()=>{var e={534:(e,t,i)=>{var n={"./echo":386,"./echo.ts":386,"./ls":346,"./ls.ts":346,"./mkdir":16,"./mkdir.ts":16,"./rm":950,"./rm.ts":950,"./rmdir":327,"./rmdir.ts":327,"./touch":476,"./touch.ts":476};function s(e){var t=o(e);return i(t)}function o(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id=534},874:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"cd",description:"Change the shell working directory",args:{name:"folder",template:"folders",suggestions:[{name:"-",description:"Switch to the last used folder",hidden:!0},{name:"~",description:"Switch to the home directory",hidden:!0}]}}},334:function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s={...n(i(8)).default,name:"code-insiders",description:"Visual Studio Code Insiders"};t.default=s},8:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i={name:"code",description:"Visual Studio Code",args:{template:["filepaths","folders"],isVariadic:!0},options:[{name:"-",description:"Read from stdin (e.g. 'ps aux | grep code | code -')"},{name:["-d","--diff"],description:"Compare two files with each other",args:[{name:"file",template:"filepaths"},{name:"file",template:"filepaths"}]},{name:["-m","--merge"],description:"Perform a three-way merge by providing paths for two modified versions of a file, the common origin of both modified versions and the output file to save merge results",args:[{name:"path1",template:"filepaths"},{name:"path2",template:"filepaths"},{name:"base",template:"filepaths"},{name:"result",template:"filepaths"}]},{name:["-a","--add"],description:"Add folder(s) to the last active window",args:{name:"folder",template:"folders",isVariadic:!0}},{name:["-g","--goto"],description:"Open a file at the path on the specified line and character position",args:{name:"file:line[:character]",template:"filepaths"}},{name:["-n","--new-window"],description:"Force to open a new window"},{name:["-r","--reuse-window"],description:"Force to open a file or folder in an already opened window"},{name:["-w","--wait"],description:"Wait for the files to be closed before returning"},{name:"--locale",description:"The locale to use (e.g. en-US or zh-TW)",args:{name:"locale",suggestions:[{name:"en",icon:"🇺🇸",description:"English (US)"},{name:"zh-CN",icon:"🇨🇳",description:"Simplified Chinese"},{name:"zh-TW",icon:"🇹🇼",description:"Traditional Chinese"},{name:"fr",icon:"🇫🇷",description:"French"},{name:"de",icon:"🇩🇪",description:"German"},{name:"it",icon:"🇮🇹",description:"Italian"},{name:"es",icon:"🇪🇸",description:"Spanish"},{name:"ja",icon:"🇯🇵",description:"Japanese"},{name:"ko",icon:"🇰🇷",description:"Korean"},{name:"ru",icon:"🇷🇺",description:"Russian"},{name:"bg",icon:"🇧🇬",description:"Bulgarian"},{name:"hu",icon:"🇭🇺",description:"Hungarian"},{name:"pt-br",icon:"🇧🇷",description:"Portuguese (Brazil)"},{name:"tr",icon:"🇹🇷",description:"Turkish"}]}},{name:"--user-data-dir",description:"Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code",args:{name:"dir",template:"folders"}},{name:"--profile",description:"Opens the provided folder or workspace with the given profile and associates the profile with the workspace. If the profile does not exist, a new empty one is created. A folder or workspace must be provided for the profile to take effect",args:{name:"settingsProfileName"}},{name:["-h","--help"],description:"Print usage"},{name:"--extensions-dir",description:"Set the root path for extensions",args:{name:"dir",template:"folders"}},{name:"--list-extensions",description:"List the installed extensions"},{name:"--show-versions",description:"Show versions of installed extensions, when using --list-extensions"},{name:"--category",description:"Filters installed extensions by provided category, when using --list-extensions",args:{name:"category",suggestions:["azure","data science","debuggers","extension packs","education","formatters","keymaps","language packs","linters","machine learning","notebooks","programming languages","scm providers","snippets","testing","themes","visualization","other"]}},{name:"--install-extension",description:"Installs or updates an extension. The argument is either an extension id or a path to a VSIX. The identifier of an extension is '${ publisher }.${ name }'. Use '--force' argument to update to latest version. To install a specific version provide '@${version}'. For example: 'vscode.csharp@1.2.3'",args:{name:"extension-id[@version] | path-to-vsix"}},{name:"--pre-release",description:"Installs the pre-release version of the extension, when using --install-extension"},{name:"--uninstall-extension",description:"Uninstalls an extension",args:{name:"extension-id"}},{name:"--enable-proposed-api",description:"Enables proposed API features for extensions. Can receive one or more extension IDs to enable individually"},{name:["-v","--version"],description:"Print version"},{name:"--verbose",description:"Print verbose output (implies --wait)"},{name:"--log",description:"Log level to use. Default is 'info' when unspecified",args:{name:"level",default:"info",suggestions:["critical","error","warn","info","debug","trace","off"]}},{name:["-s","--status"],description:"Print process usage and diagnostics information"},{name:"--prof-startup",description:"Run CPU profiler during startup"},{name:"--disable-extensions",description:"Disable all installed extensions"},{name:"--disable-extension",description:"Disable an extension",args:{name:"extension-id"}},{name:"--sync",description:"Turn sync on or off",args:{name:"sync",description:"Whether to enable sync",suggestions:["on","off"]}},{name:"--inspect-extensions",description:"Allow debugging and profiling of extensions. Check the developer tools for the connection URI",args:{name:"port"}},{name:"--inspect-brk-extensions",description:"Allow debugging and profiling of extensions with the extension host being paused after start. Check the developer tools for the connection URI",args:{name:"port"}},{name:"--disable-gpu",description:"Disable GPU hardware acceleration"},{name:"--max-memory",description:"Max memory size for a window (in Mbytes)",args:{name:"memory",description:"Memory in megabytes"}},{name:"--telemetry",description:"Shows all telemetry events which VS code collects"}]};t.default=i},386:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i={name:"echo",description:"Write arguments to the standard output",args:{name:"string",isVariadic:!0,optionsCanBreakVariadicArg:!1,suggestCurrentToken:!0,generators:{custom:async(e,t,i)=>e.length<3||e[e.length-1].startsWith("$")?Object.keys(i.environmentVariables).map((e=>({name:`$${e}`,type:"arg",description:"Environment Variable"}))):[],trigger:"$"}},options:[{name:"-n",description:"Do not print the trailing newline character"},{name:"-e",description:"Interpret escape sequences"},{name:"-E",description:"Disable escape sequences"}]};t.default=i},346:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"ls",description:"List directory contents",args:{isVariadic:!0,template:["filepaths","folders"],filterStrategy:"fuzzy"},options:[{name:"-@",description:"Display extended attribute keys and sizes in long (-l) output"},{name:"-1",description:"(The numeric digit ``one''.)  Force output to be one entry per line.  This is the default when output is not to a terminal"},{name:"-A",description:"List all entries except for . and ...  Always set for the super-user"},{name:"-a",description:"Include directory entries whose names begin with a dot (.)"},{name:"-B",description:"Force printing of non-printable characters (as defined by ctype(3) and current locale settings) in file names as xxx, where xxx is the numeric value of the character in octal"},{name:"-b",description:"As -B, but use C escape codes whenever possible"},{name:"-C",description:"Force multi-column output; this is the default when output is to a terminal"},{name:"-c",description:"Use time when file status was last changed for sorting (-t) or long printing (-l)"},{name:"-d",description:"Directories are listed as plain files (not searched recursively)"},{name:"-e",description:"Print the Access Control List (ACL) associated with the file, if present, in long (-l) output"},{name:"-F",description:"Display a slash (/) immediately after each pathname that is a directory, an asterisk (*) after each that is executable, an at sign (@) after each symbolic link, an equals sign (=) after each socket, a percent sign (%) after each whiteout, and a vertical bar (|) after each that is a FIFO"},{name:"-f",description:"Output is not sorted.  This option turns on the -a option"},{name:"-G",description:"Enable colorized output.  This option is equivalent to defining CLICOLOR in the environment.  (See below.)"},{name:"-g",description:"This option is only available for compatibility with POSIX; it is used to display the group name in the long (-l) format output (the owner name is suppressed)"},{name:"-H",description:"Symbolic links on the command line are followed.  This option is assumed if none of the -F, -d, or -l options are specified"},{name:"-h",description:"When used with the -l option, use unit suffixes: Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte in order to reduce the number of digits to three or less using base 2 for sizes"},{name:"-i",description:"For each file, print the file's file serial number (inode number)"},{name:"-k",description:"If the -s option is specified, print the file size allocation in kilobytes, not blocks.  This option overrides the environment variable BLOCKSIZE"},{name:"-L",description:"Follow all symbolic links to final target and list the file or directory the link references rather than the link itself.  This option cancels the -P option"},{name:"-l",description:"(The lowercase letter ``ell''.)  List in long format.  (See below.)  A total sum for all the file sizes is output on a line before the long listing"},{name:"-m",description:"Stream output format; list files across the page, separated by commas"},{name:"-n",description:"Display user and group IDs numerically, rather than converting to a user or group name in a long (-l) output.  This option turns on the -l option"},{name:"-O",description:"Include the file flags in a long (-l) output"},{name:"-o",description:"List in long format, but omit the group id"},{name:"-P",description:"If argument is a symbolic link, list the link itself rather than the object the link references.  This option cancels the -H and -L options"},{name:"-p",description:"Write a slash (`/') after each filename if that file is a directory"},{name:"-q",description:"Force printing of non-graphic characters in file names as the character `?'; this is the default when output is to a terminal"},{name:"-R",description:"Recursively list subdirectories encountered"},{name:"-r",description:"Reverse the order of the sort to get reverse lexicographical order or the oldest entries first (or largest files last, if combined with sort by size"},{name:"-S",description:"Sort files by size"},{name:"-s",description:"Display the number of file system blocks actually used by each file, in units of 512 bytes, where partial units are rounded up to the next integer value.  If the output is to a terminal, a total sum for all the file sizes is output on a line before the listing.  The environment variable BLOCKSIZE overrides the unit size of 512 bytes"},{name:"-T",description:"When used with the -l (lowercase letter ``ell'') option, display complete time information for the file, including month, day, hour, minute, second, and year"},{name:"-t",description:"Sort by time modified (most recently modified first) before sorting the operands by lexicographical order"},{name:"-u",description:"Use time of last access, instead of last modification of the file for sorting (-t) or long printing (-l)"},{name:"-U",description:"Use time of file creation, instead of last modification for sorting (-t) or long output (-l)"},{name:"-v",description:"Force unedited printing of non-graphic characters; this is the default when output is not to a terminal"},{name:"-W",description:"Display whiteouts when scanning directories.  (-S) flag)"},{name:"-w",description:"Force raw printing of non-printable characters.  This is the default when output is not to a terminal"},{name:"-x",description:"The same as -C, except that the multi-column output is produced with entries sorted across, rather than down, the columns"},{name:"-%",description:"Distinguish dataless files and directories with a '%' character in long (-l) output, and don't materialize dataless directories when listing them"},{name:"-,",description:"When the -l option is set, print file sizes grouped and separated by thousands using the non-monetary separator returned\nby localeconv(3), typically a comma or period.  If no locale is set, or the locale does not have a non-monetary separator, this\noption has no effect.  This option is not defined in IEEE Std 1003.1-2001 (“POSIX.1”)",dependsOn:["-l"]},{name:"--color",description:"Output colored escape sequences based on when, which may be set to either always, auto, or never",requiresSeparator:!0,args:{name:"when",suggestions:[{name:["always","yes","force"],description:"Will make ls always output color"},{name:"auto",description:"Will make ls output escape sequences based on termcap(5), but only if stdout is a tty and either the -G flag is specified or the COLORTERM environment variable is set and not empty"},{name:["never","no","none"],description:"Will disable color regardless of environment variables"}]}}]}},16:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mkdir",description:"Make directories",args:{name:"directory name",template:"folders",suggestCurrentToken:!0},options:[{name:["-m","--mode"],description:"Set file mode (as in chmod), not a=rwx - umask",args:{name:"MODE"}},{name:["-p","--parents"],description:"No error if existing, make parent directories as needed"},{name:["-v","--verbose"],description:"Print a message for each created directory"},{name:["-Z","--context"],description:"Set the SELinux security context of each created directory to CTX",args:{name:"CTX"}},{name:"--help",description:"Display this help and exit"},{name:"--version",description:"Output version information and exit"}]}},950:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"rm",description:"Remove directory entries",args:{isVariadic:!0,template:["folders","filepaths"]},options:[{name:["-r","-R"],description:"Recursive. Attempt to remove the file hierarchy rooted in each file argument",isDangerous:!0},{name:"-P",description:"Overwrite regular files before deleting them",isDangerous:!0},{name:"-d",description:"Attempt to remove directories as well as other types of files"},{name:"-f",description:"⚠️ Attempt to remove the files without prompting for confirmation",isDangerous:!0},{name:"-i",description:"Request confirmation before attempting to remove each file"},{name:"-v",description:"Be verbose when deleting files"}]}},327:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"rmdir",description:"Remove directories",args:{isVariadic:!0,template:"folders"},options:[{name:"-p",description:"Remove each directory of path",isDangerous:!0}]}},476:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"touch",description:"Change file access and modification times",args:{name:"file",isVariadic:!0,template:"folders",suggestCurrentToken:!0},options:[{name:"-A",description:"Adjust the access and modification time stamps for the file by the specified value",args:{name:"time",description:"[-][[hh]mm]SS"}},{name:"-a",description:"Change the access time of the file"},{name:"-c",description:"Do not create the file if it does not exist"},{name:"-f",description:"Attempt to force the update, even if the file permissions do not currently permit it"},{name:"-h",description:"If the file is a symbolic link, change the times of the link itself rather than the file that the link points to"},{name:"-m",description:"Change the modification time of the file"},{name:"-r",description:"Use the access and modifications times from the specified file instead of the current time of day",args:{name:"file"}},{name:"-t",description:"Change the access and modification times to the specified time instead of the current time of day",args:{name:"timestamp",description:"[[CC]YY]MMDDhhmm[.SS]"}}]}},712:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.upstreamSpecs=void 0,t.upstreamSpecs=["echo","ls","mkdir","rm","rmdir","touch"]},815:function(e,t,i){"use strict";var n,s=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var s=Object.getOwnPropertyDescriptor(t,i);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,s)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||(n=function(e){return n=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},n(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i=n(e),r=0;r<i.length;r++)"default"!==i[r]&&s(t,e,i[r]);return o(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.windowsDefaultExecutableExtensions=void 0,t.isExecutable=async function(e,i){if((0,a.osIsWindows)()){const n=function(e){const i=t.windowsDefaultExecutableExtensions,n=new Set;if(e)for(const[t,s]of Object.entries(e))!0===s?i.push(t):n.add(t);return Array.from(new Set(i)).filter((e=>!n.has(e)))}(i);return void 0!==n.find((t=>e.endsWith(t)))}try{return!!(64&(await l.stat(e)).mode)}catch(e){return!1}};const a=i(761),l=r(i(943));t.windowsDefaultExecutableExtensions=[".exe",".bat",".cmd",".com",".msi",".ps1",".vbs",".js",".jar",".py",".rb",".pl",".sh"]},761:function(e,t,i){"use strict";var n,s=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var s=Object.getOwnPropertyDescriptor(t,i);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,s)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||(n=function(e){return n=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},n(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i=n(e),r=0;r<i.length;r++)"default"!==i[r]&&s(t,e,i[r]);return o(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.osIsWindows=function(){return"win32"===a.platform()};const a=r(i(857))},830:function(e,t,i){"use strict";var n,s=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var s=Object.getOwnPropertyDescriptor(t,i);s&&!("get"in s?!t.__esModule:s.writable||s.configurable)||(s={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,s)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||(n=function(e){return n=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},n(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i=n(e),r=0;r<i.length;r++)"default"!==i[r]&&s(t,e,i[r]);return o(t,e),t}),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TerminalShellType=t.availableSpecs=void 0,t.activate=async function(e){e.subscriptions.push(l.window.registerTerminalCompletionProvider({id:"terminal-suggest",async provideTerminalCompletions(e,i,n){if(n.isCancellationRequested)return;const s="shellType"in e.state?e.state.shellType:void 0;if(!s)return;const o=await async function(e=process.env){const t=new Set;let i;if(y){const t=Object.keys(e).find((e=>"path"===e.toLowerCase()));t&&(i=e[t])}else i=e.PATH;if(void 0===i)return;if(O&&v===i)return{completionResources:O,labels:t};const n=i.split(y?";":":"),s=y?"\\":"/",o=new Set;for(const e of n)try{if(!await c.stat(e).then((e=>e.isDirectory())).catch((()=>!1)))continue;const i=l.Uri.file(e),n=await l.workspace.fs.readDirectory(i);for(const[e,r]of n){const n=q(l.Uri.joinPath(i,e),s);!t.has(e)&&r!==l.FileType.Unknown&&r!==l.FileType.Directory&&await(0,b.isExecutable)(n,w)&&(o.add({label:e,detail:n}),t.add(e))}}catch(e){continue}return O=o,{completionResources:o,labels:t}}(e.shellIntegration?.env),r=await async function(e,t){try{const i=P.get(e);if(i)return i;const n=e=>e&&!t?.has(e),s=function(e){switch(e){case M.Bash:return"bash";case M.Fish:return"fish";case M.Zsh:return"zsh";case M.PowerShell:return"pwsh";default:return}}(e);if(!s)return;const o={encoding:"utf-8",shell:s};let r;switch(e){case M.Bash:r=(0,u.execSync)("compgen -b",o).split("\n").filter(n);break;case M.Zsh:r=(0,u.execSync)('printf "%s\\n" ${(k)builtins}',o).split("\n").filter(n);break;case M.Fish:r=(0,u.execSync)("functions -n",o).split(", ").filter(n);break;case M.PowerShell:{const t=await new Promise(((e,t)=>{(0,u.exec)("Get-Command -All | Select-Object Name, CommandType, DisplayName, Definition | ConvertTo-Json",{...o,maxBuffer:104857600},((i,n)=>{i?t(i):e(n)}))}));let i;try{i=JSON.parse(t)}catch(e){return console.error("Error parsing pwsh output:",e),[]}const n=i.map((e=>1===e.CommandType?{label:e.Name,detail:e.DisplayName}:{label:e.Name,detail:e.Definition}));return P.set(e,n),n}}const a=r?.map((e=>({label:e})));return P.set(e,a),a}catch(e){return void console.error("Error fetching builtin commands:",e)}}(s,o?.labels)??[];if(!o?.completionResources)return;const a=[...o.completionResources,...r],d=function(e,t){if(""===e.trim())return"";if(t<e.length&&/\S/.test(e[t]))return"";const i=e.slice(0,t).match(/(\S+)\s*$/);return i?i[0]:""}(i.commandLine,i.cursorPosition),p=y?"\\":"/",f=await I(t.availableSpecs,i,a,d,e.shellIntegration?.cwd,n);if(e.shellIntegration?.env){const t=f.items.find((e=>"~"===e.label));t&&e.shellIntegration.env.HOME&&(t.documentation=q(l.Uri.file(e.shellIntegration.env.HOME),p,l.TerminalCompletionItemKind.Folder),t.kind=l.TerminalCompletionItemKind.Folder)}return f.cwd&&(f.filesRequested||f.foldersRequested)?new l.TerminalCompletionList(f.items,{filesRequested:f.filesRequested,foldersRequested:f.foldersRequested,cwd:f.cwd,pathSeparator:y?"\\":"/",env:e.shellIntegration?.env}):f.items}},"/","\\")),y&&(w=l.workspace.getConfiguration("terminal.integrated.suggest").get("windowsExecutableExtensions"),e.subscriptions.push(l.workspace.onDidChangeConfiguration((e=>{e.affectsConfiguration(x)&&(w=l.workspace.getConfiguration("terminal.integrated.suggest").get("windowsExecutableExtensions"),O=void 0,v=void 0)}))))},t.resolveCwdFromPrefix=S,t.asArray=T,t.getCompletionItemsFromSpecs=I;const l=r(i(398)),c=r(i(943)),d=r(i(928)),u=i(317),p=i(712),f=a(i(8)),m=a(i(874)),h=a(i(334)),g=i(761),b=i(815),y=(0,g.osIsWindows)();let v,w;const x="terminal.integrated.suggest.windowsExecutableExtensions";let O;const P=new Map;t.availableSpecs=[m.default,h.default,f.default];for(const e of p.upstreamSpecs)t.availableSpecs.push(i(534)(`./${e}`).default);async function S(e,t){if(t){try{let i;y?(i=e.lastIndexOf("\\"),-1===i&&(i=e.lastIndexOf("/"))):i=e.lastIndexOf("/");const n=-1===i?"":e.slice(0,i),s=d.resolve(t?.fsPath,n);if((await c.stat(s)).isDirectory())return t.with({path:s})}catch{}return t}}function _(e){return"description"in e?e.description??"":""}function C(e){return"string"==typeof e?[e]:"string"==typeof e.name?[e.name]:Array.isArray(e.name)&&0!==e.name.length?e.name:void 0}function k(e,t,i,n,s,o){const r=t.endsWith(" ")?"":t.split(" ").at(-1)??"";return{label:i.label,detail:n??i.detail??"",documentation:s,replacementIndex:e-r.length,replacementLength:r.length,kind:o??l.TerminalCompletionItemKind.Method}}function T(e){return Array.isArray(e)?e:[e]}async function I(e,t,i,n,s,o){const r=[];let a=!1,l=!1;const c=function(e){const t=e.split(" ");let i=t[0];return t.length>1?i=void 0:0===t.length&&(i=e),i}(t.commandLine),d=t.commandLine.slice(0,t.cursorPosition+1);for(const s of e){const e=C(s);if(e)for(const u of e){const e=i.find((e=>e.label===u));if(!e||o&&o.isCancellationRequested)continue;if((!t.commandLine||c&&u.startsWith(c))&&r.push(k(t.cursorPosition,n,{label:u},_(s),e.detail)),!t.commandLine.startsWith(u))continue;const p=j(u,s,t,d);if(p&&(r.push(...p.items),a||(a=p.filesRequested),l||(l=p.foldersRequested)),!p?.items.length){const e=R(u,s,t,d,n);e&&(r.push(...e.items),a||(a=e.filesRequested),l||(l=e.foldersRequested))}}}const u=!(t.commandLine.trim()&&r.length||a||l);if(!t.commandLine.substring(0,t.cursorPosition).trimStart().includes(" ")&&!a&&!l){const e=new Set(r.map((e=>e.label)));for(const s of i)e.has(s.label)||r.push(k(t.cursorPosition,n,s,s.detail))}let p;return u&&(a=!0,l=!0),s&&(a||l)&&(p=await S(n,s)??s),{items:r,filesRequested:a,foldersRequested:l,cwd:p}}function j(e,t,i,n){let s;"args"in t&&t.args&&T(t.args)&&(s=T(t.args));const o=`${e} `;if(!n.includes(o))return;return D(s,n.slice(n.lastIndexOf(o)+o.length),i)||void 0}function R(e,t,i,n,s){let o;if("options"in t&&t.options&&(o=t.options),!o)return;const r=[];for(const t of o){const o=C(t);if(o)for(const a of o){if(r.find((e=>e.label===a)))continue;r.push(k(i.cursorPosition,s,{label:a},t.description,void 0,l.TerminalCompletionItemKind.Flag));const o=`${e} ${a} `;if(!n.includes(o))continue;const c=n.slice(n.lastIndexOf(o)+o.length),d=D(t.args,c,i);if(d)return{items:d.items,filesRequested:d.filesRequested,foldersRequested:d.foldersRequested}}}return{items:r,filesRequested:!1,foldersRequested:!1}}function D(e,t,i){if(!e)return;let n=[],s=!1,o=!1;for(const r of T(e))if(r&&(r.template&&("filepaths"===r.template?s=!0:"folders"===r.template&&(o=!0)),r.suggestions?.length)){n=[];for(const e of r.suggestions){const a=C(e);if(!a)continue;const c=i.commandLine.slice(0,i.cursorPosition).split(" ").at(-2),d=i.commandLine.slice(0,i.cursorPosition).split(" ").at(-1);for(const u of a)if(!n.find((e=>e.label===u))){if(!r.isVariadic&&c===u&&""===d?.trim())return{items:[],filesRequested:s,foldersRequested:o};if(u&&u.startsWith(t.trim())){const t="string"!=typeof e?e.description:"";n.push(k(i.cursorPosition,d??"",{label:u},t,void 0,l.TerminalCompletionItemKind.Argument))}}}if(n.length)return{items:n,filesRequested:s,foldersRequested:o}}return{items:n,filesRequested:s,foldersRequested:o}}function q(e,t,i){let n=e.fsPath;return"\\"===t&&n.match(/^[a-zA-Z]:\\/)&&(n=`${n[0].toUpperCase()}:${n.slice(2)}`),i===l.TerminalCompletionItemKind.Folder&&(n.endsWith(t)||(n+=t)),n}var M;!function(e){e[e.Sh=1]="Sh",e[e.Bash=2]="Bash",e[e.Fish=3]="Fish",e[e.Csh=4]="Csh",e[e.Ksh=5]="Ksh",e[e.Zsh=6]="Zsh",e[e.CommandPrompt=7]="CommandPrompt",e[e.GitBash=8]="GitBash",e[e.PowerShell=9]="PowerShell",e[e.Python=10]="Python",e[e.Julia=11]="Julia",e[e.NuShell=12]="NuShell",e[e.Node=13]="Node"}(M||(t.TerminalShellType=M={}))},398:e=>{"use strict";e.exports=require("vscode")},317:e=>{"use strict";e.exports=require("child_process")},943:e=>{"use strict";e.exports=require("fs/promises")},857:e=>{"use strict";e.exports=require("os")},928:e=>{"use strict";e.exports=require("path")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n=i(830),s=exports;for(var o in n)s[o]=n[o];n.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/33fc5a94a3f99ebe7087e8fe79fbe1d37a251016/extensions/terminal-suggest/dist/terminalSuggestMain.js.map