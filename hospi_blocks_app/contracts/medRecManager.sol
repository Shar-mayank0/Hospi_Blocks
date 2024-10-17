// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecordManager {
    enum UserRole { Admin, Hospital, Patient }

    struct MedicalRecord {
        string recordID;
        string recordType;
        string description;
        string decryptionKey;
        string ipfsHash;
        uint256 date;
    }

    struct Patient {
        string patientID;
        string firstName;
        string lastName;
        string governmentID;
        string contactNumber;
        MedicalRecord[] medicalRecords;
    }

    address public admin;
    mapping(address => UserRole) public userRoles;
    mapping(string => Patient) public patients;

    event RecordUploaded(string indexed patientID, string recordID, address indexed hospital, string ipfsHash);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyVerifiedHospital() {
        require(userRoles[msg.sender] == UserRole.Hospital, "Only verified hospitals can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
        userRoles[msg.sender] = UserRole.Admin;
    }

    function registerHospital(address _hospital) public onlyAdmin {
        require(userRoles[_hospital] != UserRole.Hospital, "Hospital already registered");
        userRoles[_hospital] = UserRole.Hospital;
    }

    function addPatient(
        string memory _patientID,
        string memory _firstName,
        string memory _lastName,
        string memory _governmentID,
        string memory _contactNumber
    ) public onlyAdmin {
        require(bytes(patients[_patientID].patientID).length == 0, "Patient already exists");

        // Initialize the patient with an empty array directly in storage
        Patient storage newPatient = patients[_patientID];
        newPatient.patientID = _patientID;
        newPatient.firstName = _firstName;
        newPatient.lastName = _lastName;
        newPatient.governmentID = _governmentID;
        newPatient.contactNumber = _contactNumber;
    }

    function addMedicalRecord(
        string memory _patientID,
        string memory _recordID,
        string memory _recordType,
        string memory _description,
        string memory _decryptionKey,
        string memory _ipfsHash
    ) public onlyVerifiedHospital {
        require(bytes(patients[_patientID].patientID).length != 0, "Patient does not exist");

        MedicalRecord memory newRecord = MedicalRecord({
            recordID: _recordID,
            recordType: _recordType,
            description: _description,
            decryptionKey: _decryptionKey,
            ipfsHash: _ipfsHash,
            date: block.timestamp
        });

        patients[_patientID].medicalRecords.push(newRecord);
        emit RecordUploaded(_patientID, _recordID, msg.sender, _ipfsHash);
    }

    function getTotalRecords(string memory _patientID) public view returns (uint256) {
        return patients[_patientID].medicalRecords.length;
    }
}
