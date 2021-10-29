package scala.cli.commands

import caseapp._

import scala.build.internal.Constants

object Version extends ScalaCommand[VersionOptions] {
  override def names: List[List[String]] = List(
    List("version"), List("-version"), List("--version")
  )
  override def group = "Miscellaneous"
  def run(options: VersionOptions, args: RemainingArgs): Unit = {
    println(Constants.version)
  }
}
