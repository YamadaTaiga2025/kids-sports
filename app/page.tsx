import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EventPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-50 to-yellow-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">🏃‍♂️ こども運動会</h1>
            <div className="flex gap-4">
              <Link href="/" className="text-blue-600 font-medium hover:text-blue-800">
                イベント紹介
              </Link>
              <Link href="/competitions" className="text-blue-600 font-medium hover:text-blue-800">
                競技紹介
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">🎉 運動会のご案内 🎉</h2>

            <Card className="bg-white shadow-lg border-2 border-blue-200 mb-8">
              <CardContent className="p-8">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg font-semibold text-blue-600">親愛なる兄弟姉妹達</p>

                  <p>
                    この度、中学生以下の若者と子供たち、そしてお父さんお母さんとの交友の機会を設けたいとのご意向を考慮して、運動会を計画しました。会衆では数人の子供達でも、巡回区にはたくさんの仲間たちが頑張っていることを実感することで、「エホバからの喜びは...力となる」ことを共有したいと思っています。-ネヘ
                    8:10
                  </p>

                  <p>
                    夏休みの時期の開催ということで、熱中症対策として冷房完備の体育館を会場にしています。冷房の費用が高額なため、短い時間ですが、質の高い楽しいメニューが予定されています。保護者、お子様方の支援を望まれる方も「玉入れ」やリレーには参加できる予定ですので、皆さんでお楽しみください。
                  </p>

                  <p>
                    申し込みに関しては、次のリンクから必要事項を記載していただき送信してくださいますようお願いいたします。申し込みに関しては
                    7 月 20 日までにお願いできますと助かります。
                  </p>
                  <div className="mt-4">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScvCM59lrs1yjmIT7JQi3lMrgrNNsWbr8-1OnoZSsuq8_MDrg/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    >
                      📝 参加申し込みフォーム
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <Link href="/competitions">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  競技内容を見る 🏆
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Guidelines */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">📋 参加される方へのお願い</h3>

            <Card className="bg-yellow-50 border-2 border-yellow-300 mb-8">
              <CardContent className="p-6">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-xl">•</span>
                    <span>飲み物は各自ご持参ください。</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-xl">•</span>
                    <span>
                      お名前を知るためにゼッケンの代わりに養生テープを貼り、会衆名と氏名を大きく書かせてください。
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold text-xl">•</span>
                    <span>
                      大人 500 円(観覧希望の方も含む)高校生以下 300
                      円をご支援いただけますと助かります。(運動会当日、赤い帽子をかぶっている方にお渡しくださいますと助かります)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">💝 保護者および支援者の皆様</h3>

            <Card className="bg-purple-50 border-2 border-purple-300">
              <CardContent className="p-8">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    会衆において「子は神からの贈り物」と強く感じながら日々をお過ごしのことと思います。(詩編
                    127:3)学校では、楽しい運動会であっても、信仰ゆえに参加できない分野が生じることもあり、本当によく頑張ってお過ごしのこと、頭が下がる思いです。
                  </p>

                  <p>
                    『子供は村全体で育てる』という言葉があるようですが、エホバを賛美する努力を払われる子供たちが楽しい時間を過ごすだけでなく、愛すべき仲間がたくさん自分の周りにいるということを認識できる機会になればと思い、運動会を企画しました。近隣会衆のお友達をたくさん作る機会にもなったら嬉しく思います。
                  </p>

                  <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
                    <h4 className="text-xl font-semibold text-purple-700 mb-4">🤝 ご支援のお願い</h4>
                    <p className="mb-4">
                      一緒に楽しむためにもし可能であればご検討いただきたい点がございます。子供たちの働きに感謝し、同じ気持ちで子供たちの成長と笑顔を共に見守り応援したいと思ってくださる方でご支援いただける方は、参加費とは別に
                      1 口 500 円から受け付けております。
                    </p>
                    <p className="mb-4">
                      その費用は会場費、お菓子食い競争、参加者へのプレゼントに用いさせていただきます。よろしければご参加ください。参加して下さった方には、運動会終了後に会計報告を送付させていただきます。
                    </p>
                    <p className="text-purple-600 font-medium mb-4">次のリンクよりお申込みいただくことができます。</p>
                    <div className="text-center">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfZpP6haHkbhyuq1T-PHzIDkeQ9QaYGo5nJWIiYxyPwv41j6A/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                      >
                        💝 費用支援申し込みフォーム
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">皆さんにお会いできることを楽しみにしています。どうぞよろしくお願いします。</p>
          <div className="space-y-2">
            <p className="font-semibold">主催者一同</p>
            <div className="mt-4 space-y-1">
              <p>
                <strong>責任者</strong>
              </p>
              <p>小松陽平(多治見市星ケ台会衆)</p>
              <p>作田直樹(美濃加茂市古井会衆)</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
