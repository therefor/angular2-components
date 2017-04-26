/**.
 */

export interface Dialog{
    title:string;
    text:string;
    type:string;
    callback?:Function
}
export interface DialogMethod{
    confirmDialog:Function,
    hintDialog:Function
}
