var FAM;
if (!FAM) { FAM = {}; }

FAM.PeriodConvention = {
    '12m of 30d' : 1, // 12 months of 30 days each
    'Exact 365d' : 2 // Exact number of days in month, year has 365 days
};

FAM.AnnualMethodEntry = {
    'Anniversary' : 1,
    'Fiscal Year' : 2
};

FAM.MonthNames = {
    January : 1,
    February : 2,
    March : 3,
    April : 4,
    May : 5,
    June : 6,
    July : 7,
    August : 8,
    September : 9,
    October : 10,
    November : 11,
    December : 12
};

FAM.TransactionType = {
    'Acquisition' : 1,
    'Depreciation' : 2,
    'Sale or Disposal' : 3,
    'Write-Down' : 4,
    'Revaluation' : 5
};

FAM.AssetStatus = {
    'Depreciating' : 2,
    'Fully Depreciated' : 3,
    'Disposed' : 4,
    'Disposed (WO)' : 5,
    'New' : 6,
    'Splitting' : 7,
    'Part Disposed' : 8
};

FAM.DepreciationRules = {
    'Acquisition' : 1,
    'Disposal' : 2,
    'Pro-rata' : 3,
    'Mid-month' : 4
};

FAM.FinalPeriodCon = {
    'Fully Depreciate' : 1,
    'Retain Balance' : 2
};

FAM.BGProcessStatus = {
    InProgress : 1,
    Completed : 2,
    CompletedError : 3,
    Failed : 4,
    Queued : 5
};

FAM.DeprActive = {
    True : 1,
    False : 2,
    OnProjComp : 3 // On Project Completion
};

FAM.TaxMethodStatus = {
    'New' : 1,
    'Depreciating' : 2,
    'Fully Depreciated' : 3,
    'Disposed' : 4
};

FAM.Conventions = {
    'None' : 1,
    'Half-Year' : 2,
    'Mid-Quarter' : 3,
    'Mid-Month' : 4
};

FAM.DeprPeriod = {
    'Monthly' : 1,
    'Annually' : 2,
    'Fiscal Period' : 3,
    'Fiscal Year' : 4
};

FAM.SummarizeBy = {
    'Asset Type' : 1,
    'Parent' : 2,
    'Sub-Category' : 3
};

FAM.ProposalStatus = {
    New : 1,
    Pending : 2,
    Created : 3,
    Rejected : 4,
    Combined : 5
};

FAM.BGPActivityType = {
    Direct : 1,
    Custom : 2,
    Planned : 3
};
