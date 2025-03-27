namespace L_C_G_F {

    //% shim=TD_ID
    //% blockId=wordPicker
    //% block="$word"
    //% blockHidden=true
    //% word.fieldEditor="textdropdown"
    //% word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values='.fl,.glf,.gf'
    //% word.defl='.gf'
    export function __wordPicker(word: string): string {
        return word;
    }

    //% block="Create New File-Name: $name Id: $id Type: $word"
    //% blockId=New_File_Info
    //% word.shadow="wordPicker"
    export function New_File_Info(name: string, id: number, word: string) {

        }
    }
