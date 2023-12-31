import React from 'react'
import jwtDecode from 'jwt-decode'

const { roles_id } = jwtDecode(localStorage.getItem('accessToken'))

const Dashboard = React.lazy(() => import('./views/admin/Dashboard'))
// Lamaran
const vacancyPage = React.lazy(() => import('./views/applicationMenu/Vacancy/vacancyPage'))
const passAdministration = React.lazy(() =>
  import('./views/applicationMenu/adminPass/passAdministration'),
)
const notPass = React.lazy(() => import('./views/applicationMenu/adminNotPass/notPass'))
const interviewerPage = React.lazy(() => import('./views/interviewer/interviewerPage'))
const userPage = React.lazy(() => import('./views/user/userPage'))
const Home = React.lazy(() => import('./views/appearsMenu/appearsHome/Home'))
const educationM = React.lazy(() => import('./views/appearsMenu/educationMaster/educationM'))
const majorM = React.lazy(() => import('./views/appearsMenu/majorMaster/majorM'))
const expertiseM = React.lazy(() => import('./views/appearsMenu/expertiseMaster/expertiseM'))
const certificationM = React.lazy(() =>
  import('./views/appearsMenu/certificationMaster/certificationM'),
)

const selectionM = React.lazy(() => import('./views/selectionMaster/selectionM'))
const sectionM = React.lazy(() => import('./views/sectionMaster/sectionM'))
const detailVacancy = React.lazy(() => import('./views/vacancyDetail/detailVacancy'))
const dataApplicant = React.lazy(() => import('./views/applicantData/dataApplicant'))
const resultCandidates = React.lazy(() => import('./views/candidatesResult/resultCandidates'))
const viewCandidates = React.lazy(() => import('./views/candidatesData/viewCandidates'))
const resultAtten = React.lazy(() => import('./views/candidateAtten/attenCandidates'))
const dashIntervPage = React.lazy(() => import('./views/dashInterviewer/dashIntervPage'))
const intervAccessPage = React.lazy(() => import('./views/interviewerAccess/intervAccessPage'))

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes =
  roles_id === 2
    ? [
        { path: '/dashInterviewer', name: 'Dashboard', element: dashIntervPage },
        { path: '/candidatesData', name: 'Data Kandidat', element: viewCandidates },
        { path: '/interviewerAccess', name: 'Data Kandidat', element: intervAccessPage },
      ]
    : [
        // { path: '/', exact: true, name: 'Home' },
        { path: '/admin', name: 'Dashboard', element: Dashboard },
        // { path: '/applicationMenu/adminSelection', name: 'Seleksi Administrasi', element: administrationSelection },
        { path: '/applicationMenu/Vacancy', name: 'Lowongan', element: vacancyPage },
        {
          path: '/applicationMenu/adminPass',
          name: 'Lolos Administrasi',
          element: passAdministration,
        },
        { path: '/applicationMenu/adminNotPass', name: 'Daftar Tidak Lolos', element: notPass },
        { path: '/interviewer', name: 'Interviewer', element: interviewerPage },
        { path: '/user', name: 'Pengguna', element: userPage },
        { path: '/appearsMenu', name: 'Tampilan', element: Home, exact: true },
        { path: '/appearsMenu/appearsHome', name: 'Beranda', element: Home },
        { path: '/appearsMenu/educationMaster', name: 'Master Pendidikan', element: educationM },
        { path: '/appearsMenu/majorMaster', name: 'Master Jurusan', element: majorM },
        { path: '/appearsMenu/expertiseMaster', name: 'Master Keahlian', element: expertiseM },
        {
          path: '/appearsMenu/certificationMaster',
          name: 'Master Sertifikasi',
          element: certificationM,
        },
        { path: '/selectionMaster', name: 'Master Seleksi', element: selectionM },
        { path: '/sectionMaster', name: 'Master Section', element: sectionM },
        { path: '/vacancyDetail', name: 'Detail Lowongan', element: detailVacancy },
        { path: '/applicantData', name: 'Data Pelamar', element: dataApplicant },
        { path: '/candidatesResult', name: 'Hasil Kandidat', element: resultCandidates },
        { path: '/candidateAtten', name: 'Kehadiran', element: resultAtten },
        { path: '/theme', name: 'Theme', element: Colors, exact: true },
        { path: '/theme/colors', name: 'Colors', element: Colors },
        { path: '/theme/typography', name: 'Typography', element: Typography },
        { path: '/base', name: 'Base', element: Cards, exact: true },
        { path: '/base/accordion', name: 'Accordion', element: Accordion },
        { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
        { path: '/base/cards', name: 'Cards', element: Cards },
        { path: '/base/carousels', name: 'Carousel', element: Carousels },
        { path: '/base/collapses', name: 'Collapse', element: Collapses },
        { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
        { path: '/base/navs', name: 'Navs', element: Navs },
        { path: '/base/paginations', name: 'Paginations', element: Paginations },
        { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
        { path: '/base/popovers', name: 'Popovers', element: Popovers },
        { path: '/base/progress', name: 'Progress', element: Progress },
        { path: '/base/spinners', name: 'Spinners', element: Spinners },
        { path: '/base/tables', name: 'Tables', element: Tables },
        { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
        { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
        { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
        { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
        { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
        { path: '/charts', name: 'Charts', element: Charts },
        { path: '/forms', name: 'Forms', element: FormControl, exact: true },
        { path: '/forms/form-control', name: 'Form Control', element: FormControl },
        { path: '/forms/select', name: 'Select', element: Select },
        { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
        { path: '/forms/range', name: 'Range', element: Range },
        { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
        { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
        { path: '/forms/layout', name: 'Layout', element: Layout },
        { path: '/forms/validation', name: 'Validation', element: Validation },
        { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
        { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
        { path: '/icons/flags', name: 'Flags', element: Flags },
        { path: '/icons/brands', name: 'Brands', element: Brands },
        { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
        { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
        { path: '/notifications/badges', name: 'Badges', element: Badges },
        { path: '/notifications/modals', name: 'Modals', element: Modals },
        { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
        { path: '/widgets', name: 'Widgets', element: Widgets },
      ]

export default routes
