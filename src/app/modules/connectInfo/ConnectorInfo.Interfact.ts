
export type ConnetInfo = {
    id?: number,
    name: string,
    email?: string | null,
    contactNumber: string,
    diagnosticName?: string | null,
}

export type ConnectorAmount = {
    id?: number,
    connectorId: number,
    newPatientAmount: number,
    oldPatientAmount: number,
}

export type UpdateConnectorInfo = {
    name?: string,
    email?: string | null,
    contactNumber?: string,
    diagnosticName?: string | null,
}

export type UpdateConnectorAmount = {
    newPatientAmount?: number,
    oldPatientAmount?: number,
}