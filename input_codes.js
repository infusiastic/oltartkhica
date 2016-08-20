var input_codes = {};
var case_names = [
  "OBL", "IND", "ABS", "ERG", "EFF", "AFF",
  "DAT", "INS", "ACT", "DER", "SIT", "POS",
  "PRP", "GEN", "ATT", "PDC", "ITP", "OGN",
  "PAR", "CRS", "CPS", "PRD", "MED", "APL",
  "PUR", "CSD", "ESS", "ASI", "FUN", "TFM",
  "REF", "CLA", "CNV", "IDP", "BEN", "TSP",
  "CMM", "COM", "CNJ", "UTL", "ABE", "CVS",
  "COR", "DER", "PVS", "PTL", "CON", "VOC",
  "EXC", "AVR", "CMP", "SML", "ASS", "CNR",
  "ACS", "DFF", "PER", "PRO", "PCV", "PCR",
  "ELP", "ALP", "INP", "EPS", "PRL", "LIM",
  "LOC", "ORI", "PSV", "ALL", "ABL", "NAV"];
for (var i = 0; i < 3; i++) {
  $.merge(case_names,
    ["CMPA", "CMPB", "CMPC", "CMPD", "CMPE", "CMPF", "CMPG", "CMPH"]);
};
$.each(case_names, function(i,j) {
  if (!$.isArray(input_codes[j])) {input_codes[j] = [];};
  input_codes[j].push(String.fromCharCode(i+0xE000)); // Primary characters
  input_codes[j].push(String.fromCharCode(i+0xE060)); // Secondary characters
  input_codes[j].push(String.fromCharCode(i+0xE185)); // Reversed secondary characters
});
var aspect_names = [
  'RTR','PRS','HAB','PRG','IMM','PCS','REG','EXP','RSM','CSS','RCS','PAU',
  'RGR','PCL','CNT','ICS','PMP','CLM','PTC','TMP','MTV','CSQ','SQN','EPD',
  'DSC','CCL','CUL','IMD','TRD','TNC','ITC','CSM'];
$.each(aspect_names, function(i,j) {
  if (!$.isArray(input_codes[j])) {input_codes[j] = [];};
  input_codes[j].push(String.fromCharCode(i+0xE000)); // Primary characters
  input_codes[j].push("" + String.fromCharCode(i+0xE165)); // Secondary characters
  input_codes[j].push("" + String.fromCharCode(i+0xE1E5)); // Reversed secondary characters
});
var modality_names = [
  'DES','ASP','EXV','CRD','REQ','EXH','OPR','CPC','PRM','PTN','CLS','OBG',
  'IMS','ADV','ITV','ANT','DSP','PRE','NEC','DEC','PTV','VOL','ACC','INC',
  'CML','DVR','DVT','PFT','IPS','PMS'];
$.each(modality_names, function(i,j) {
  if (!$.isArray(input_codes[j])) {input_codes[j] = [];};
  input_codes[j].push(String.fromCharCode(i+0xE020)); // Primary characters
  input_codes[j].push("" + String.fromCharCode(i+0xE205)); // Secondary characters
});
var valence_names = [
  'MNO','PRL','CRO','RCP','CPL','NNR','DUP','DEM','RES','IMT','CNG','PTI',
  'IDC','MUT','CNF','AFM','RPT','INF','ITU','PSM','PSM2','PPT','PPT2','CJT',
  'DUB','TEN','PUT','IPB'];
$.each(valence_names, function(i,j) {
  if (!$.isArray(input_codes[j])) {input_codes[j] = [];};
  input_codes[j].push(String.fromCharCode(i+0xE0E3)); // Primary characters
});
// Tertiary characters
input_codes["TER"] = ['', '', '', '', '', '', ''];
// Diacritics
input_codes["PR"] = [''];
input_codes['U'] = [''];
input_codes['N'] = [''];
input_codes['A'] = [''];
input_codes['M'] = [''];
input_codes['U'].push('');
input_codes['N'].push('');
input_codes['A'].push('');
input_codes['IFL'] = ['','','',''];
input_codes['FML'] = ['','','',''];

input_codes["RPV"] = [String.fromCharCode(0xE123)];
input_codes["DEG"] = ['', '', '', '', '', '', '', '', ''];
// Consonantal Characters
input_codes["P"] = ['',''];
input_codes["PH"] = ['',''];
input_codes["B"] = ['',''];
input_codes["PP"] = ['', '']
input_codes["T"] = ['', ''];
input_codes["TH"] = ['', ''];
input_codes["D"] = ['', ''];
input_codes["DH"] = ['', ''];
input_codes["TT"] = ['', ''];
input_codes["L"] = ['', '', '', ''];
input_codes["TL"] = ['', '']
input_codes["M"].push('');
input_codes["M"].push('');
input_codes["R"] = ['', '', '', ''];
input_codes["N"].push('');
input_codes["N"].push('');
input_codes["N"].push('');
input_codes["N"].push('');
input_codes["S"] = ['', '', '', ''];
input_codes["Z"] = ['', '', '', '', '', ''];
input_codes["C"] = ['', '', '', '', '', ''];
input_codes["CH"] = ['', '']
input_codes["J"] = ['', '']
input_codes["CC"] = ['', '', '', ''];
input_codes["K"] = ['', ''];
input_codes["KH"] = ['', ''];
input_codes["G"] = ['', ''];
input_codes["KK"] = ['', ''];
input_codes["Q"] = ['', ''];
input_codes["QH"] = ['', ''];
input_codes["QQ"] = ['', ''];
input_codes["F"] = ['', ''];
input_codes["V"] = ['', ''];
input_codes["W"] = ['', ''];
input_codes["Y"] = ['', ''];
input_codes["X"] = ['', ''];
input_codes["XH"] = ['', ''];
input_codes["GG"] = ['', ''];
// Consonantal Modifiers
// Pattern, Stem and Relation
input_codes["UNF"] = ['','','','','','','','',''];
input_codes["FRA"] = ['','','','','','','','',''];
// Affixes
input_codes["MM"] = [''];
input_codes["L"].push('');
input_codes["M"].push('');
input_codes["R"].push('');
input_codes["L"].push('');
input_codes["N"].push('');
input_codes["S"].push('');
input_codes["N"].push('');
input_codes["Z"].push('');
input_codes["R"].push('');
input_codes["C"].push('');
input_codes["C"].push('');
input_codes["C"].push('');
input_codes["Z"].push('');
input_codes["K"].push('');
input_codes["P"].push('');
input_codes["Q"].push('');
input_codes["T"].push('');
input_codes["X"].push('');
input_codes["T"].push('');
input_codes["F"].push('');
input_codes["XH"].push('');
input_codes["B"].push('');
input_codes["G"].push('');
input_codes["G"].push('');
input_codes["Z"].push('');
input_codes["J"].push('');
input_codes["DH"].push('');
input_codes["Z"].push('');
// Misc characters
input_codes["NC"] = ['','',''];