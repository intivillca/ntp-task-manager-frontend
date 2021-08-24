import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";

export const GeneratePDFReport = (tasks, translation) => {
  const doc = new jsPDF();

  const tableColumn = [
    translation.TaskName, 
    translation.TaskDesc,
    translation.StartDate,
    translation.EndDate,
    translation.Status,
    translation.Category,
    translation.Person
  ];
  const tableRows = [];

  tasks.forEach(item => { 
    const data = [
      item.taskname,
      item.taskdesc,
      format(new Date(item.startdate), 'MM/dd/yyyy'),
      format(new Date(item.enddate), 'MM/dd/yyyy'),
      item.status,
      item.category,
      [item.firstname + ' ' + item.lastname],
    ];
    tableRows.push(data);
  });
     
  
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  doc.save(`report_${format(new Date(), 'MM/dd/yyyy')}.pdf`);
};

