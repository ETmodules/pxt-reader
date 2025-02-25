//% color="#EEAA00" icon="\uf02b"
//% block="ET: Reader"
namespace EtReader {
    let MODULE = "EtReader"

    let RFID = ""
    let IBUT = ""
    let EventRfid: EtCommon.eventHandler
    let EventIBut: EtCommon.eventHandler

    export function onEventRfid(id: string, value: string) {
        RFID = value
        if (EventRfid) EventRfid(id)
    }

    export function onEventIBut(id: string, value: string) {
        IBUT = value
        if (EventIBut) EventIBut(id)
    }

    //% block="ID"
    //% block.loc.nl="ID"
    export function id(): string {
        return MODULE
    }

    //% block="set module id to %id"
    //% block.loc.nl="stel de module id in op %id"
    //% id.defl="EtReader"
    export function setModuleId(id: string) {
        EtCommon.events.unregister(MODULE)
        MODULE = id
        EtCommon.events.register(id, "rfid", onEventRfid)
        EtCommon.events.register(id, "ibutton", onEventIBut)
    }

    //% block="id of the rfid card of %id"
    //% block.loc.nl="id van de rfid-kaart van %id"
    //% id.defl="EtReader"
    export function askRfid(id: string): string {
        return RFID
    }

    //% block="id of the ibutton of %id"
    //% block.loc.nl="id van de ibutton van %id"
    //% id.defl="EtReader"
    export function askIBut(id: string): string {
        return IBUT
    }

    //% block="when %id has read an rfid tag"
    //% block.loc.nl="wanneer %id een rfid kaart heeft gelezen"
    //% id.defl="EtReader"
    export function onRfid(id: string, programmableCode: () => void): void {
        EventRfid = programmableCode
    }

    //% block="when %id has read an ibutton"
    //% block.loc.nl="wanneer %id een ibutton heeft gelezen"
    //% id.defl="EtReader"
    export function onIBut(id: string, programmableCode: () => void): void {
        EventIBut = programmableCode
    }

    EtCommon.events.register(MODULE, "rfid", onEventRfid)
    EtCommon.events.register(MODULE, "ibutton", onEventIBut)

}
