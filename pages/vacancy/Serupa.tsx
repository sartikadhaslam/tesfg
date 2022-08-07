type Job = {
  id: number;
  logo: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  years: string;
  status: string;
  createdTime: string;
}

let jobSerupa: Job[] = [
  {
    id: 1,
    logo: 'logo company',
    title: 'UI/UX Designer',
    company: 'Ruangguru',
    location: 'Jakarta, Indonesia',
    salary: 'Rp.7000.000 - 9.000.000',
    years: '1 - 3 tahun',
    status: 'Active Hiring',
    createdTime: 'Dibuat seminggu yang lalu'
  },
  {
    id: 2,
    logo: 'logo company',
    title: 'Product Designer',
    company: 'Vidio',
    location: 'Jakarta, Indonesia',
    salary: 'Rp.7000.000 - 9.000.000',
    years: '1 - 3 tahun',
    status: 'Active Hiring',
    createdTime: 'Dibuat seminggu yang lalu'
  }
];

export default function Serupa() {
  return (
    <div id="serupavacancy">
                <div>
                    <h4 className="font-bold">pekerjaan yang sama</h4>
                </div>
                <div>
                   {jobSerupa.map(jobDetail => {
                    return <div key={jobDetail.company} className="flex flex-col bg-gray-50 border-2 border-gray-800">
                        <div className="my-6">
                            <div className="flex flex-row space-x-4 items-center">
                                <div id="icon">
                                <p>logo</p>
                                </div>
                                <div id="temp">
                                    <h4 className="text-xs">{jobDetail.title}</h4>
                                    <p className="text-xs text-gray-500">{jobDetail.company}</p>
                                    <p className="text-xs text-gray-500">{jobDetail.salary}</p>
                                </div>
                                <div className="items-center">
                                  <span className="text-lg">                                
                                      <div className="rounded md:rounded-lg mr-2 px-2.5 py-0.5 bg-green-800">
                                          {jobDetail.status}
                                      </div>
                                  </span>
                                  <span className="text-lg">
                                      {jobDetail.createdTime}
                                  </span>
                              </div>
                            </div>
                        </div>
                    </div>
                  })}
                </div>
    </div> 
  )
}
