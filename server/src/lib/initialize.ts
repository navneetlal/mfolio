import sequelize from "../database"

import Investor from "../models/investor"
import Folio from "../models/folio"
import Scheme from "../models/scheme"
import Transaction from "../models/transactions"

function initialize(report: any) {
  const { investor_info, folios } = report
  return sequelize.transaction(async transaction => {
    const investor = await Investor.create({
      name: investor_info.name,
      email: investor_info.email,
      address: investor_info.address,
      mobile: investor_info.mobile
    }, { transaction })

    const folioRefactored = folios.map((folio: any) => ({
      investorId: investor.investorId,
      folioNumber: folio.folio,
      amc: folio.amc,
      pan: folio.PAN,
      kyc: folio.KYC === 'OK' ? true : false,
      panKyc: folio.PANKYC === 'OK' ? true : false
    }))
    await Folio.bulkCreate(folioRefactored, { transaction })

    const schemeRefactored = folios.flatMap((folio: any) => {
      return folio.schemes.map((scheme: any) => ({
        folioNumber: folio.folio,
        amfi: scheme.amfi,
        name: scheme.scheme,
        type: scheme.type,
        advisor: scheme.advisor,
        rtaCode: scheme.rta_code,
        rta: scheme.rta,
        valuation: scheme.valuation
      }))
    })
    await Scheme.bulkCreate(schemeRefactored, { transaction })

    const transactionRefactored = folios.flatMap((folio: any) => {
      return folio.schemes.flatMap((scheme: any) => {
        return scheme.transactions.map((t: any) => ({
          amfi: scheme.amfi,
          date: new Date(t.date),
          description: t.description,
          amount: t.amount,
          units: t.units,
          nav: t.nav,
          balance: t.balance,
          type: t.type,
          dividendRate: t.dividend_rate
        }))
      })
    })
    await Transaction.bulkCreate(transactionRefactored, { transaction })
  })
}

export default initialize