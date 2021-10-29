package scala.cli.integration

import com.eed3si9n.expecty.Expecty.expect

class VersionTests extends munit.FunSuite {

  val inputs = TestInputs(
    Seq(
      os.rel / "simple.sc" ->
        s"""val msg = "Hello"
           |println(msg)
           |""".stripMargin
    )
  )

  for(command <- Seq("version", "-version", "--version"))
    test(command) {
      inputs.fromRoot { root =>
        val result = os.proc(TestUtil.cli, command).call(cwd = root)
        expect(result.exitCode == 0)
        val output = result.out.lines().head
        expect(output == Constants.version)
        //semver regex: https://stackoverflow.com/questions/58456563/extracting-segments-of-a-semver-version-string-via-java-regex
        expect(output.matches("([1-9]\\d*)\\.(\\d+)\\.(\\d+)(?:-([a-zA-Z0-9]+))?"))
      }
    }
}
