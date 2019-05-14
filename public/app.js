const API_URL =
    'https://developer.nps.gov/api/v1/parks?api_key=ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function handleSearch() {
    // Handle search event from LWC web component
    const agGrid = document.querySelector('ag-grid');
    document
        .querySelector('wc-search-box')
        .addEventListener('search', event => {
            agGrid.api.setQuickFilter(event.detail.value);
        });
}

const COLUMN_DEFINITIONS = [
    {
        headerName: '',
        width: 26,
        checkboxSelection: true,
        resizable: false
    },
    {
        headerName: 'Designation',
        field: 'designation',
        width: 150,
        sortable: true,
        resizable: true
    },
    {
        headerName: 'Name',
        field: 'fullName',
        sortable: true,
        resizable: true
    },
    {
        headerName: 'State',
        width: 60,
        field: 'states',
        sortable: true,
        resizable: true
    },
    {
        headerName: 'Code',
        width: 60,
        field: 'parkCode',
        sortable: true,
        resizable: true
    },
    {
        headerName: 'Description',
        field: 'description',
        sortable: true,
        resizable: true
    },
    {
        headerName: 'Website',
        field: 'url',
        sortable: true,
        resizable: true
    }
];

function fetchData() {
    return fetch('/public/data.json').then(response => {
        return response.json();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const agGrid = document.querySelector('ag-grid');

    fetchData().then(json => {
        agGrid.gridOptions = {
            columnDefs: COLUMN_DEFINITIONS,
            rowData: json.data,
            onGridReady: function() {
                this.api.sizeColumnsToFit();
            }
        };
    });

    handleSearch();
});
