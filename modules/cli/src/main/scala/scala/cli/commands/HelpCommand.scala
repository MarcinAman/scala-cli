package scala.cli.commands

import scala.cli.ScalaCli

object HelpCommand extends DefaultBase(
      ScalaCli.help.help(ScalaCli.helpFormat),
      ScalaCli.help.help(ScalaCli.helpFormat, showHidden = true)
    ) {
  override def names: List[List[String]] = List(
    List("help")
  )
}
