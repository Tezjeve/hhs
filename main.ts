namespace L_C_G_F {

    //% shim=TD_ID
    //% blockId=wordPicker
    //% block="$Type"
    //% blockHidden=true
    //% word.fieldEditor="textdropdown"
    //% word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values='hi,hello'
    //% word.defl='hello'
    export function __wordPicker(Type: string): string {
        return Type;
    }

    //% block="Create New File-Name: $name Id: $id Type: $Type"
    //% blockId=New_File_Info
    //% word.shadow="wordPicker"
    export function New_File_Info(name: string, id: number, Type: string) {

        }
    }
