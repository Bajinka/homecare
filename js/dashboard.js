// Staff dashboard functionality

document.addEventListener('DOMContentLoaded', function() {
    const currentStaff = JSON.parse(localStorage.getItem('currentStaff'));

    if (!currentStaff) {
        window.location.href = 'staff-login.html';
        return;
    }

    // Display staff name
    document.getElementById('moduleTitle').textContent = `Welcome, ${currentStaff.name}`;

    // Logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentStaff');
        window.location.href = 'staff-login.html';
    });

    // Load dashboard data
    loadDashboardData();
});

// Load dashboard statistics
function loadDashboardData() {
    // In a real application, this would fetch data from a server
    // For demo purposes, we'll use mock data
    const mockData = {
        residents: 12,
        staff: 8,
        appointments: 5,
        incidents: 0
    };

    document.getElementById('residentCount').textContent = mockData.residents;
    document.getElementById('staffCount').textContent = mockData.staff;
    document.getElementById('appointmentsCount').textContent = mockData.appointments;
    document.getElementById('incidentsCount').textContent = mockData.incidents;
}

// Show module content
function showModule(moduleName) {
    const currentStaff = JSON.parse(localStorage.getItem('currentStaff'));
    const moduleTitle = document.getElementById('moduleTitle');
    const moduleContent = document.getElementById('moduleContent');

    // Set module title
    const titles = {
        'admission': 'Admission & Intake System',
        'behavioral': 'Behavioral Health System',
        'medication': 'Medication Management',
        'incident': 'Incident Reporting System',
        'transportation': 'Transportation System',
        'daily': 'Daily Living Program',
        'medical': 'Medical Records System',
        'safety': 'Safety & Emergency System',
        'rights': 'Resident Rights & Complaints',
        'personnel': 'Personnel Management'
    };

    moduleTitle.textContent = titles[moduleName] || 'Module';

    // Generate module content based on type
    let content = '';

    switch(moduleName) {
        case 'admission':
            content = generateAdmissionModule();
            break;
        case 'behavioral':
            content = generateBehavioralModule();
            break;
        case 'medication':
            content = generateMedicationModule();
            break;
        case 'incident':
            content = generateIncidentModule();
            break;
        case 'transportation':
            content = generateTransportationModule();
            break;
        case 'daily':
            content = generateDailyModule();
            break;
        case 'medical':
            content = generateMedicalModule();
            break;
        case 'safety':
            content = generateSafetyModule();
            break;
        case 'rights':
            content = generateRightsModule();
            break;
        case 'personnel':
            content = generatePersonnelModule();
            break;
        default:
            content = '<p>Module content coming soon.</p>';
    }

    moduleContent.innerHTML = content;

    // Show modal
    const moduleModal = new bootstrap.Modal(document.getElementById('moduleModal'));
    moduleModal.show();
}

// Generate module content functions
function generateAdmissionModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>New Admission</h5>
                <form id="admissionForm">
                    <div class="mb-3">
                        <label class="form-label">Resident Name</label>
                        <input type="text" class="form-control" id="residentName" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Date of Birth</label>
                        <input type="date" class="form-control" id="dob" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Admission Date</label>
                        <input type="date" class="form-control" id="admissionDate" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Referring Agency</label>
                        <input type="text" class="form-control" id="referringAgency">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Admission</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Recent Admissions</h5>
                <div id="admissionsList">
                    <p>Loading admissions...</p>
                </div>
            </div>
        </div>
    `;
}

function generateBehavioralModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Add Counseling Note</h5>
                <form id="counselingForm">
                    <div class="mb-3">
                        <label class="form-label">Resident ID</label>
                        <input type="text" class="form-control" id="counselingResidentId" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Session Date</label>
                        <input type="date" class="form-control" id="sessionDate" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Notes</label>
                        <textarea class="form-control" id="counselingNotes" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-success">Save Note</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Treatment Plans</h5>
                <div id="treatmentPlansList">
                    <p>Loading treatment plans...</p>
                </div>
            </div>
        </div>
    `;
}

function generateMedicationModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Medication Administration</h5>
                <form id="medicationForm">
                    <div class="mb-3">
                        <label class="form-label">Resident ID</label>
                        <input type="text" class="form-control" id="medResidentId" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Medication Name</label>
                        <input type="text" class="form-control" id="medicationName" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Dosage</label>
                        <input type="text" class="form-control" id="dosage" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Time Administered</label>
                        <input type="time" class="form-control" id="adminTime" required>
                    </div>
                    <button type="submit" class="btn btn-info">Log Administration</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Today's Medications</h5>
                <div id="medicationsList">
                    <p>Loading medications...</p>
                </div>
            </div>
        </div>
    `;
}

function generateIncidentModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Report Incident</h5>
                <form id="incidentForm">
                    <div class="mb-3">
                        <label class="form-label">Incident Type</label>
                        <select class="form-control" id="incidentType" required>
                            <option value="">Select Type</option>
                            <option value="medical">Medical Emergency</option>
                            <option value="behavioral">Behavioral Incident</option>
                            <option value="safety">Safety Concern</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Resident ID (if applicable)</label>
                        <input type="text" class="form-control" id="incidentResidentId">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Date/Time</label>
                        <input type="datetime-local" class="form-control" id="incidentDateTime" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea class="form-control" id="incidentDescription" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-danger">Submit Report</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Recent Incidents</h5>
                <div id="incidentsList">
                    <p>Loading incidents...</p>
                </div>
            </div>
        </div>
    `;
}

function generateTransportationModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Log Transportation</h5>
                <form id="transportationForm">
                    <div class="mb-3">
                        <label class="form-label">Resident ID</label>
                        <input type="text" class="form-control" id="transportResidentId" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Destination</label>
                        <input type="text" class="form-control" id="destination" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Purpose</label>
                        <select class="form-control" id="transportPurpose" required>
                            <option value="">Select Purpose</option>
                            <option value="medical">Medical Appointment</option>
                            <option value="dental">Dental Appointment</option>
                            <option value="therapy">Therapy Session</option>
                            <option value="community">Community Outing</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Departure Time</label>
                        <input type="datetime-local" class="form-control" id="departureTime" required>
                    </div>
                    <button type="submit" class="btn btn-warning">Log Trip</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Today's Transportation</h5>
                <div id="transportationList">
                    <p>Loading transportation logs...</p>
                </div>
            </div>
        </div>
    `;
}

function generateDailyModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Daily Living Activity</h5>
                <form id="dailyForm">
                    <div class="mb-3">
                        <label class="form-label">Resident ID</label>
                        <input type="text" class="form-control" id="dailyResidentId" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Activity Type</label>
                        <select class="form-control" id="activityType" required>
                            <option value="">Select Activity</option>
                            <option value="hygiene">Personal Hygiene</option>
                            <option value="meal">Meal Preparation</option>
                            <option value="chore">Household Chore</option>
                            <option value="skill">Skill Building</option>
                            <option value="social">Social Activity</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Activity Description</label>
                        <textarea class="form-control" id="activityDescription" rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Outcome</label>
                        <select class="form-control" id="activityOutcome" required>
                            <option value="">Select Outcome</option>
                            <option value="completed">Completed Successfully</option>
                            <option value="partial">Partially Completed</option>
                            <option value="assisted">Required Assistance</option>
                            <option value="refused">Refused Activity</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-secondary">Log Activity</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Today's Activities</h5>
                <div id="activitiesList">
                    <p>Loading activities...</p>
                </div>
            </div>
        </div>
    `;
}

function generateMedicalModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Add Progress Note</h5>
                <form id="medicalForm">
                    <div class="mb-3">
                        <label class="form-label">Resident ID</label>
                        <input type="text" class="form-control" id="medicalResidentId" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Note Type</label>
                        <select class="form-control" id="noteType" required>
                            <option value="">Select Type</option>
                            <option value="progress">Progress Note</option>
                            <option value="incident">Medical Incident</option>
                            <option value="medication">Medication Change</option>
                            <option value="appointment">Appointment Summary</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Note Content</label>
                        <textarea class="form-control" id="medicalNote" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark">Save Note</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Recent Medical Notes</h5>
                <div id="medicalNotesList">
                    <p>Loading medical notes...</p>
                </div>
            </div>
        </div>
    `;
}

function generateSafetyModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Safety Checklist</h5>
                <form id="safetyForm">
                    <div class="mb-3">
                        <label class="form-label">Checklist Type</label>
                        <select class="form-control" id="checklistType" required>
                            <option value="">Select Type</option>
                            <option value="fire">Fire Safety</option>
                            <option value="emergency">Emergency Equipment</option>
                            <option value="security">Security Check</option>
                            <option value="maintenance">Maintenance Check</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Location/Area</label>
                        <input type="text" class="form-control" id="safetyLocation" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Status</label>
                        <select class="form-control" id="safetyStatus" required>
                            <option value="">Select Status</option>
                            <option value="pass">All Clear</option>
                            <option value="minor">Minor Issues</option>
                            <option value="major">Major Issues</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Notes</label>
                        <textarea class="form-control" id="safetyNotes" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit Checklist</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Emergency Procedures</h5>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-fire text-danger me-2"></i>Fire Evacuation Procedure
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-ambulance text-warning me-2"></i>Medical Emergency Response
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-exclamation-triangle text-danger me-2"></i>Crisis Intervention Protocol
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                        <i class="fas fa-shield-alt text-primary me-2"></i>Security Breach Response
                    </a>
                </div>
            </div>
        </div>
    `;
}

function generateRightsModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Submit Complaint</h5>
                <form id="complaintForm">
                    <div class="mb-3">
                        <label class="form-label">Complainant Type</label>
                        <select class="form-control" id="complainantType" required>
                            <option value="">Select Type</option>
                            <option value="resident">Resident</option>
                            <option value="family">Family Member</option>
                            <option value="staff">Staff Member</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Resident ID (if applicable)</label>
                        <input type="text" class="form-control" id="complaintResidentId">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Complaint Category</label>
                        <select class="form-control" id="complaintCategory" required>
                            <option value="">Select Category</option>
                            <option value="care">Quality of Care</option>
                            <option value="rights">Rights Violation</option>
                            <option value="safety">Safety Concern</option>
                            <option value="staff">Staff Conduct</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea class="form-control" id="complaintDescription" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-info">Submit Complaint</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Resident Rights Policy</h5>
                <div class="accordion" id="rightsAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#rights1">
                                Right to Privacy
                            </button>
                        </h2>
                        <div id="rights1" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                Residents have the right to personal privacy and confidentiality of their records.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rights2">
                                Right to Voice Concerns
                            </button>
                        </h2>
                        <div id="rights2" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Residents have the right to voice concerns and file complaints without retaliation.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generatePersonnelModule() {
    return `
        <div class="row">
            <div class="col-md-6">
                <h5>Staff Training Log</h5>
                <form id="trainingForm">
                    <div class="mb-3">
                        <label class="form-label">Staff Member</label>
                        <input type="text" class="form-control" id="trainingStaff" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Training Type</label>
                        <select class="form-control" id="trainingType" required>
                            <option value="">Select Type</option>
                            <option value="cpr">CPR Certification</option>
                            <option value="firstaid">First Aid</option>
                            <option value="crisis">Crisis Intervention</option>
                            <option value="medication">Medication Administration</option>
                            <option value="safety">Safety Procedures</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Completion Date</label>
                        <input type="date" class="form-control" id="trainingDate" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Certification Expires</label>
                        <input type="date" class="form-control" id="certificationExpiry">
                    </div>
                    <button type="submit" class="btn btn-success">Log Training</button>
                </form>
            </div>
            <div class="col-md-6">
                <h5>Staff Schedule</h5>
                <div id="staffSchedule">
                    <p>Loading staff schedule...</p>
                </div>
            </div>
        </div>
    `;
}